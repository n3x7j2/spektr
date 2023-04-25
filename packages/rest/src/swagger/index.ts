import { generate } from 'openapi-typescript-codegen';

generate({
  input:
    'https://core-spektr-api-dev.azurewebsites.net/swagger/v1/swagger.json',
  output: './src',
  clientName: 'RestClient',
  indent: '2',
  httpClient: 'axios',
  useOptions: true,
});
