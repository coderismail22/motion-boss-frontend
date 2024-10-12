import axios from "axios";

const axioxPublic = axios.create({
    baseURL: 'https://motion-boss-single-page-server.vercel.app'
})
const useAxiosPublic = () => {
    return axioxPublic;
};

export default useAxiosPublic;