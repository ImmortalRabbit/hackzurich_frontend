import axios, { Method } from 'axios';

const baseURL = 'http://192.168.43.218:8888';
const sendReceiptURL = '/api/receipts/';
const getCurrentUserURl = '';
const sendApproveURL = '';
const registerURL = '';
const loginURL = '';
const post = 'POST' as Method;
const get = 'GET' as Method;


export const receiptConfig = (data: FormData, method: Method, url: string) => {
    return {
        method: method,
        url: baseURL + url,
        headers: { 
            'Accept': 'application/json,text/html',
            'Content-Type': 'multipart/form-data',
            'Accept-Encoding': 'gzip, deflate, sdch, br',
            'Accept-Language': 'ru,en;q=0.9',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Host': 'philipp-morris-df.tech:8888',
            'If-None-Match': 'W/"68-7i74vQfMzGA0FXDdvgeuthDoLjc"',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.96 Mobile Safari/537.36'
        },
        data : data,
    }
};

export const sendReceipt = async (imageUrl: string) => {
    let data = new FormData();    
    let blob = await fetch(imageUrl).then(r => r.blob());
    data.append("file", blob);
    
    return await axios(receiptConfig(data, post, sendReceiptURL))
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}

export const sendApprove = (imageUrl: string) => {
    let data = new FormData();    
    data.append("imgsrc", imageUrl);
    
    return axios(receiptConfig(data, post, sendApproveURL))
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}

export const getCurrentUser = async () => {
    let data = new FormData();    
    
    return await axios(receiptConfig(data, get, sendReceiptURL))
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}

export const login = async (formData: any) => {
    let data = new FormData();    
    data.append('phone', formData['phone']);
    data.append('password', formData['password']);

    return 'SUCCESS';
    
   
    // return 'FAILURE';

    // return await axios(receiptConfig(data, get, loginURL))
    //     .then(response => {
    //         return response.data;
    //     })
    //     .catch(error => {
    //         return error;
    //     });
}

export const register = async (formData: any) => {
    let data = new FormData();    
    data.append('name', formData['name']);
    data.append('surname', formData['surname']);
    data.append('phone', formData['phone']);
    data.append('password', formData['password']);

    return 'SUCCESS';
    
    // return await axios(receiptConfig(data, post, registerURL))
    //     .then(response => {
    //         return response.data;
    //     })
    //     .catch(error => {
    //         return error;
    //     });
}

const ax = require('axios').default;

export const getBlock = async () => {
    return ax.get('https://philipp-morris-df.tech:8888/api/auth/me').then((response:any) => {
        return response.body;
    })
}
