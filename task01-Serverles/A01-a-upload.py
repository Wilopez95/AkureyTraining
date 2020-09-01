import json
import base64
import boto3
import datetime

def lambda_handler(event, context):
    
    s3 = boto3.client("s3")
    
    get_file_content = event["content"]
    decode_content = base64.b64decode(get_file_content)
    timestanp = str(datetime.datetime.now())
    
    s3_upload = s3.put_object(Bucket="upload-api-ak",Key=timestanp+".jpg",Body=decode_content)
    status = s3_upload['ResponseMetadata']['HTTPStatusCode']

    
    # TODO implement
    return {
        'statusCode': status,
        'fileName': timestanp+".jpg",
        'body': s3_upload,
        'result': "Upload succesfull"
    }
 