1. Create a IAM role , add the next politicals:
    AmazonS3FullAccess
    CloudWatchFullAccess
    AmazonDynamoBDFullAccess
    AWSLambdaExecute
    () This roles are only for testing proposites, for security use especific access and diferents roles.
2. Create a S3 bucket called "upload-api-ak" , then create the lambda funtion A01-a-upload.py remember add the previus role in permitions 
3. Create the API Gateway add create a new resource and a new method POST , then add the lambda funtion like origin resource.
4. In the API and the method that we just create go to <integration request> and  in Mapping templates select the second option and add mapping template create the new content-Type: application/jpg and add that. Then under add the next code: 
{
    "content": "$input.body"
}
5. Go to Apis/Settins and in Binary Media Types add one and called "application/jpg"
6. Deploy the API gateway. 
7. In postmant: select a POST and paste the link of the API gateway, in Headers create a new one and call then: Key: Conten-Type / Value: application/jpg , in body choose binary and select a jpg file in your computer.


References: 
S3+Lambda+API Gateway: https://www.youtube.com/watch?v=ETb2eVJs5UE 
Lambda Trigger from S3: https://www.youtube.com/watch?v=H_rRlnSw_5s
Lambda+DynamoBD: https://www.youtube.com/watch?v=8zhv6GDSDE8
Get/Put from DynamoBD: https://stackoverflow.com/questions/33535613/how-to-put-an-item-in-aws-dynamodb-using-aws-lambda-with-python
