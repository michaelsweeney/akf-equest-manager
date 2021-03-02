from flask import Flask, request

import os
import pandas as pd
import eqparse as eq
import xlwings as xw

app = Flask(__name__)


# hard-coded methods on eq.loadsim object
base_methods = [
    'annual_cost_enduse',
    'annual_summaries',
    'fname',
    'hourly',
    'hourly_results',
    'hourlyreports',
    'leed_enduses',
    'monthly_cost_enduse',
    'path',
    'sim',
    'sim_print',
    'simrpt',
    'systemsummaries',
    'tidy_enduses'
]

sim_methods = [
    'beps',
    'bepu',
    'dxperformance',
    'ese',
    'hourly',
    'lsb',
    'lsd',
    'lse',
    'lvb',
    'lvd',
    'path',
    'plot',
    'psf',
    'psh',
    'ratedict',
    'ssa',
    'ssb',
    'ssd',
    'ssg',
    'ssl',
    'ssr',
    'sva',
    'txtdict',
    'unmet'
]





@app.route('/test')
def hello():
    print (eq)
    return {"msg": "Hello from PYTHON API!"}

@app.route('/validatesim')
def is_valid_sim():
    file = request.args.get('file')

    try:
        thesim = eq.LoadSim(file)
        report_keys = list(thesim.sim.txtdict.keys())

        return {
            'isvalid': True,
            'fname': thesim.fname,
            'directory': thesim.path,
            'fullpath': file,
            'report_keys': report_keys,
            'sim_methods': sim_methods,
            'base_methods': base_methods
        }

    except:
        return {'isvalid': False}

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
                fname = fullexportpath + '/__' + simname + "_" + report + '_export.csv'
                methodname = report.lower().replace('-','')
                rptmethod = getattr(simobj.sim, report.lower().replace("-",""))
                rptdf = rptmethod()
                rptdf.to_csv(fname)
            
            if 'xl' in exportformat:
                fname = fullexportpath + '/__' + simname + "_" + report + '_export.xlsx'
                methodname = report.lower().replace('-','')
                rptmethod = getattr(simobj.sim, report.lower().replace("-",""))
                rptdf = rptmethod()
                rptdf.to_excel(fname)

        if 'sim' in exportformat:
            simobj.sim_print(reports, directory=exportpath)

    return {
        'files': files,
        'reports': reports,
        'exportformat': exportformat
    }



