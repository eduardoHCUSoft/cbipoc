import { Component, OnInit } from '@angular/core';
import * as jsforce from 'jsforce';

@Component({
  selector: 'app-salesforcehome',
  templateUrl: './salesforcehome.component.html',
  styleUrl: './salesforcehome.component.css'
})
export class SalesforcehomeComponent implements OnInit {
  
  private conn: jsforce.Connection;
  constructor() {
    this.conn = new jsforce.Connection({
      loginUrl: 'https://login.salesforce.com', // Use your Salesforce instance URL
    });
  }

  ngOnInit(): void {

    console.log('init component')
  }
    
 async loginsalesforce(){
  await this.conn.login('eduardo.cbipocangular@softtek.com', 'Aixef143h5aEylqvfe9oLjfN8A1HaRFUe');
      const result = await this.conn.query('SELECT Id, Name FROM Account LIMIT 10');
      console.log('Salesforce data:', result.records);
 }
  /*ngOnInit(): void {
    var express = require( 'express' ); //Adding Express
    var http = require( 'http' ); //Adding http
    var jsforce = require('jsforce'); //Adding JsForce
    var app = express();
    app.set( 'port', process.env.PORT || 3001 );
    app.get('/', function (req, res) {
    var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com'
    });
    var username = 'xyz@salesforce.com';
    var password = 'PassWord+SecurityToken';
    conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish a connection next time.
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    res.send('heySalesforce : JSForce Connect Successed!');
    });
    });
    http.createServer( app ).listen( app.get( 'port' ), function (){
    console.log( 'Express server listening on port ' + app.get( 'port' ));
    });
    
  }*/

}
