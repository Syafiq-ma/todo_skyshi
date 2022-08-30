import axios from "axios";

function Service() {
	const DOMAIN = process.env.REACT_APP_API_URL;
	const API_DOMAIN = DOMAIN + '/api/internal';
	const headers = {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	};
	const debug = process.env.REACT_APP_DEBUG === 'true';
	const debugParam = '?XDEBUG_SESSION_START=fynenz';

	const csrf = async () =>
	{
		let url = DOMAIN  + '/sanctum/csrf-cookie';
		if(debug) url += debugParam;
		try {
			const response = await axios.get(url, {withCredentials: true});
			return response;
		} catch(error) {
			return error.response;
		}
	}

	const get = function(url, params, successCallback, errorCallback) 
	{
		axios.get(API_DOMAIN + url, 
			{
				params: params,
				headers: headers,
				withCredentials: true
			}
		).then(response => { successCallback(response); }
		).catch(error => { errorCallback(error.response); });
	}

	const asyncGet = async function(url, params) {
		url = url.replace(API_DOMAIN,'');
		try{
			const response = await axios.get(API_DOMAIN + url, {
				params: params,
				headers: headers,
				withCredentials: true
			});
			return response;
		}catch(error){
			return error.response;
		}
	}

	const post = function(url, body, successCallback, errorCallback) 
	{
		axios.post(API_DOMAIN + url, body, 
			{
				headers: headers,
				withCredentials: true
			}
		).then(response => { successCallback(response); }
		).catch(error => { errorCallback(error.response); });
	}

	const asyncPost = async (url, body) => {
		try{
			const response = await axios.post(API_DOMAIN + url, body, {
				headers: headers,
				withCredentials: true
			});
			return response;
		} catch(error) {
			return error.response;
		}
	}

	const postWithFile = function(url, body, successCallback, errorCallback) 
	{
		let formData = new FormData();
		for(let key in body) {
			formData.append(key, body[key]);
		}

		axios.post(API_DOMAIN + url, formData, 
			{
				headers: {'Content-Type': 'multipart/form-data'},
				withCredentials: true
			}
		).then(response => { successCallback(response); }
		).catch(error => { errorCallback(error.response); });
	}

	const asyncPostWithFile = async (url, body) => {
		let formData = new FormData();
		for(let key in body) {
			formData.append(key, body[key]);
		}

		try{
			const response = await axios.post(API_DOMAIN + url, formData, {
				headers: {'Content-Type': 'multipart/form-data'},
				withCredentials: true
			});
			return response;
		} catch(error) {
			return error.response;
		}
	}

	const del = function(url, successCallback, errorCallback) 
	{
		axios.delete(API_DOMAIN + url, 
			{
				headers: headers,
				withCredentials: true
			}
		).then(response => { successCallback(response); }
		).catch(error => { errorCallback(error.response); });
	}

	const asyncDel = async function(url) {
		try {
			const response = await axios.delete(API_DOMAIN+url, {
				headers: headers,
				withCredentials: true
			});
			return response;
		} catch(error) {
			return error.response;
		}
	}

	return {
		csrf: csrf,
		get: get,
		post: post,
		postWithFile: postWithFile,
		delete: del,
		asyncGet: asyncGet,
		asyncPost: asyncPost,
		asyncPostWithFile: asyncPostWithFile,
		asyncDel: asyncDel
	};
}

export default Service;