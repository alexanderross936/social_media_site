const app= require('express')()
const server=require('http').Server(app)
const next=require('next')
const dev=process.env.NODE_ENV!=='production'