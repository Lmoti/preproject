import axios from "axios";
const AUTH_TOKEN = process.env.AUTHTOKEN;

// 전역 AXIOS 기본값 설정

// 인스턴스 생성시 기본값 설정
const instance = axios.create({
  baseURL: process.env.axios.defaults.baseURL,
  timeout: 3000,
  // 3초간 응답을 기다린다.
});
