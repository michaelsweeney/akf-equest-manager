from flask import Flask, request

import os
import pandas as pd
import eqparse as eq
import xlwings as xw

app = Flask(__name__)


@app.route('/test')
def hello():
    print (eq)
    return {"msg": "Hello from PYTHON API!"}

@app.route('/validatesim')
def is_valid_sim():
    file = request.args.get('file')
    try:
        eq.LoadSim(file)
        return {'msg': True}
    except:
        return {'msg': False}

@app.route('/exportreports')
def export_reports():

    files = request.args.get('files').split(',')
    reports = request.args.get('reports').split(',')
    exportformat = request.args.get('format').split(',')

    for file in files:
        simobj = eq.LoadSim(file)
        simlocation = simobj.path
        simname = simobj.fname

        exportpath = "__python_outputs"
        fullexportpath = simlocation + "/" + exportpath

        if not os.path.exists(fullexportpath):
            os.makedirs(fullexportpath)


        for report in reports:

            if 'csv' in exportformat:
                fname = fullexportpath + '/__' + simname + "_" + report + '_export_csv.csv'
                methodname = report.lower().replace('-','')
                rptmethod = getattr(simobj.sim, report.lower().replace("-",""))
                rptdf = rptmethod()
                rptdf.to_csv(fname)
            
            if 'xl' in exportformat:

                app = xw.App()

                fname = fullexportpath +  '/__' + simname +'_export_xl.xlsx'

                if not os.path.isfile(fname):
                    xw.Book().save(fname)

                book = xw.Book(fname)

                methodname = report.lower().replace('-','')
                rptmethod = getattr(simobj.sim, report.lower().replace("-",""))
                rptdf = rptmethod()

                if report not in [x.name for x in book.sheets]:
                    print ('ddddd')
                    print (report)
                    print (book.sheets)
                    book.sheets.add(report)
                
                book.sheets[report].range('A1').value = rptdf

                book.save()
                book.close()

                app.quit()

        if 'sim' in exportformat:
            simobj.sim_print(reports, directory=exportpath)





    # reports, exportformat)







    return {'msg': 'placeholder'}

