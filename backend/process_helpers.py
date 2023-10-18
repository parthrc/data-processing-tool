import pandas as pd


# Aggregrate a Numercal column based on specified functions
'''
@param
index_name - name of the label you want to aggregrate
@param
functions - array list of functions youw want
Possible values
'sum': Compute the sum of values in the column.
'mean': Calculate the mean (average) of values in the column.
'median': Calculate the median of values in the column.
'min': Find the minimum value in the column.
'max': Find the maximum value in the column.
'std': Calculate the standard deviation of values in the column.
'var': Calculate the variance of values in the column.
'count': Count the number of non-null values in the column.
'''

#NOT DONE
def aggregrate_by(json_obj, index_name, functions=['sum', 'min']):
    try:
        # Create dataframe
        df = pd.DataFrame(json_obj)
        print(df)

        # Aggregrate spcified index with functions
        df2 = df[index_name].agg(functions)
        df3 = pd.DataFrame(df2)
        dfj = df3.to_json()

    except Exception as e:
        print("Unexpected error occured")
        return print({"status": "Fail"})

    return print({"status": "Success", "msg": "Aggregrated successfully", "data": dfj})

#NOT DONE
# Group rows by index name
def group_by(json_obj, index):
    try:
        # Create dataframe
        df = pd.DataFrame(json_obj).T

        print(df)
        # Drop blanks
        df2 = df.groupby(index)
        print(df2.groups)

        for name, group in df2:
            print(name)
            print(group)

    except Exception as e:
        print("Unexpected error occured")
        return {"status": "Fail"}

    return {"status": "Success", "msg": "Grouped successfully", "data": df2.groups.to_json()}

#DONE
# Filter by list of specified index names
def filter_by(json_obj, items):
    try:
        # Create dataframe
        df = pd.DataFrame(json_obj).T
        # columns before dropping blanks
        rows_before_dropping = df.shape[1]
        print(df)
        # FIlter
        df2 = df.filter(items=items)
        dfj = df2.to_json()
        # columns after dropping blanks
        print(df2)
        rows_after_dropping = df2.shape[1]

        # Total columns dropped
        total_rows_dropped = rows_before_dropping - rows_after_dropping
    except Exception as e:
        print("Unexpected error occured")
        return {"status": "Fail"}

    return {"status": "Success", "indexes_dropped": total_rows_dropped, "data": df2}

#DONE
# Sort index
def sort_by_index(json_obj, isAscending=True):
    try:
        # Create dataframe
        df = pd.DataFrame(json_obj)
        print(df)
        # Sort
        df2 = df.sort_index()
        dfj = df2.to_json()
    except Exception as e:
        return {"status": "Unexpected error occured"}

    return {"status": "Sucess", "msg": "Data sorted successfully", "data": df2}

#NOT DONE
# Sort by column
def sort_by_column(json_obj, index_name, isAscending=True):
    try:
        print(json_obj)
        # Create dataframe
        df = pd.DataFrame(json_obj)
        print("sort by cloumn:", index_name)
        print(type(df))
        # Sort
        df3 = df.sort_values()

        print("Type of df3",type(df3))
        # dfj = df2.to_json()
    except Exception as e:
        return {"status": "Unexpected error occured"}

    return {"status": "Sucess", "msg": "Data sorted successfully", "data": df3}

#DONE
# Drop blanks pandas
def remove_blanks(json_obj):
    try:
        # Create dataframe
        df = pd.DataFrame(json_obj).T
        # Rows before dropping blanks
        rows_before_dropping = df.shape[0]
        # Drop blanks
        df2 = df.dropna().T
        # Rows after dropping blanks
        rows_after_dropping = df2.shape[0]

        # Total rows dropped
        total_rows_dropped = rows_before_dropping - rows_after_dropping
    
    except Exception as e:
        print("Unexpected error occured")
        return {"status": "Fail"}

    return {"status": "Success", "rows_dropped": total_rows_dropped, "data": df2}

#DONE
# Drop duplicates
def remove_duplicates(json_obj):
    try:
        print(json_obj)
        # Create dataframe
        df = pd.DataFrame(json_obj).T
        # Rows before dropping blanks
        rows_before_dropping = df.shape[0]
     
        print(df)
        # Drop blanks
        df2 = df.drop_duplicates(keep="first", inplace=False)
        print(type(df2))
        print(df2)
        df2 = df2.fillna('')
        dfj = df2.to_json()
        # Rows after dropping blanks
        rows_after_dropping = df2.shape[0]
   

        # Total rows dropped
        total_rows_dropped = rows_before_dropping - rows_after_dropping
        print(total_rows_dropped)

    except Exception as e:
        print("Unexpected error occured")
        return {"status": "Fail"}

    return {"status": "Success", "rows_dropped": total_rows_dropped, "data": df2}
