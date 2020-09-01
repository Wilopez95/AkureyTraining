import json
import urllib.parse
import boto3
import base64

print('Loading function')

s3 = boto3.client('s3')
dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    #1 - Get the bucket name
    bucket = event['Records'][0]['s3']['bucket']['name']
    print("bucketName:" +bucket)

    #2 - Get the file/key name
    key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
    print("fileName:" +key)

    response = s3.get_object(Bucket=bucket, Key=key)
    

    #3 -Parse the content to B64 encode.
    content =base64.b64encode( response["Body"].read()).decode('utf-8')
    
    #4 -Put the data of the upload into the database
    dynamodb.put_item(TableName='imagen_data', Item={'filename':{'S':key},'filedata':{'S':content}})
    print(key+' added to the database')
    
    
    print("data: "+ content)
    
    