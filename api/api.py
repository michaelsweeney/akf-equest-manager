from flask import Flask, request
app = Flask(__name__)

import eqparse as eq

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
        sim = eq.LoadSim(file)

        simlocation = sim.path


        for report in reports:
            
            if 'csv' in exportformat:

                fname = simlocation + '/__export_' + report + '.csv'

                methodname = report.lower().replace('-','')

                rptmethod = getattr(sim.sim, report.lower().replace("-",""))

                rptdf = rptmethod()


                rptdf.to_csv(fname)





    # reports, exportformat)







    return {'msg': 'placeholder'}

