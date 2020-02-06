// import React, { useState, useEffect } from 'react';
import "./services/api";
import api from './services/api';

function users() {
    async function autenticate(email,password){
        const response = await api.get('/authenticate',{
            email,
            password
        });

        return response.token;
    } 
}

export default users;