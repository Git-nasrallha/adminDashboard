import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify"
import {config} from '../../config/data.js';

const apiUrl = 'http://localhost:5000/api/users';

