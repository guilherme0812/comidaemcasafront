import axios from "axios";
import { getToken } from "./auth";

export const api = axios.create({
  baseURL: 'http://192.168.0.4/'
})