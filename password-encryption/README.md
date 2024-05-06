# Password Encryption Edge Function

Password Encryption Edge Function allows a developer to offload encryption computation to fleek network and with minimal delays get a useable encrypted password that can then be stored.

## Getting Started
1. Clone the repo
2. Enter the correct directory 
   ```
   cd password-encryption
   ```
3. Install dependencies
   ```
   npm i
   ```  
4. Build the edge function yourself
   ```
   npm run build
   ```
5. Create a new Fleek function using Fleek CLI
   ```
   fleek functions create --name <function-name>
   ```
6. Deploy the function
   ```
   fleek functions deploy --name <function-name> --path <file-path>
   ``` 
   
As you successfully follow these steps you will find a link in the CLI that is our edge function. 
For example - 
`https://smile-byte-screeching.functions.dev.on-fleek-test.app`


## Contribute
Please fork the repo and raise a PR as and when your changes are done.
