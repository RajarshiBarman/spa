var app = angular.module("myApp",[]);

app.filter('evenage', function()
{
    return function(text) {
        let txt = '';
            text = text || '';
            if(text%2==0){
                txt = text+" ✅"
            }
            else{
                txt = text+" ❌"
            }
            return txt;
        }
        
    });

app.filter('genderdetect', function()
{
    return function(text) {
        let txt = '';
            text = text || '';
            if(text=='M'){
                txt = text+" 🙋🏻‍♂️"
            }
            else{
                txt = text+" 🙋🏻‍♀️"
            }
            return txt;
        }
        
    });

app.controller("stdCtrl",function($scope)
{
    var student=[
        {name:'Rajarshi',sec:"MCA-B",dob:"07-05-2001",gender:"M",age:21,city:"Siliguri"},
        {name:'Ayushya',sec:"MCA-A",dob:"10-11-2001",gender:"F",age:21,city:"Bhadreshwar"},
        {name:'Awantika',sec:"MCA-B",dob:"17-09-2001",gender:"F",age:21,city:"Siliguri"},
        {name:'Darpan',sec:"MCA-B",dob:"04-05-2001",gender:"M",age:21,city:"Guwahati"},
        {name:'Apooorva',sec:"MCA-B",dob:"09-01-2001",gender:"F",age:21,city:"Jaipur"},
        {name:'Debanjan',sec:"MCA-B",dob:"30-11-2000",gender:"M",age:22,city:"Kolkata"}       
    ];
    $scope.std=student;
    $scope.rowlimit=6;

});
