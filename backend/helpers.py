import pandas as pd
import json
# Constants
CONTENT_TYPE_JSON = "application/json"
CONTENT_TYPE_CSV = "text/csv"
CONTENT_TYPE_EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

SUPPORTED_CONTENT_TYPES = ["application/json", "text/csv",
                           "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]



#Convert files to json
def convert_to_json(file):
    for content_type in SUPPORTED_CONTENT_TYPES:
        if file.content_type == content_type:
            if content_type == CONTENT_TYPE_EXCEL:

                data = pd.read_excel(file.file, sheet_name="Sheet1")
                json_data = data.to_json(orient='index')
                print(json_data)
                return json_data

            elif content_type == CONTENT_TYPE_CSV:

                data = pd.read_csv(
                    file.file, encoding='utf-8')
               
                json_data = data.to_json(orient='records')                      
                return json_data
            
            elif content_type == CONTENT_TYPE_JSON:

                data = pd.read_json(file.file)
                json_data = data.to_json(orient='index')
                return json_data
            
    return {"msg": "File format not supported - convertor function"}    
            



