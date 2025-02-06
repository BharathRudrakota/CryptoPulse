import { useGetcryptoStatsQuery } from "../services/Cryptomarkets"

const useCryptostats = () => {
    const {data,isloading,isError}=useGetcryptoStatsQuery()
    let stats=data?.data  || {}
    // console.log("stats",stats)
  return {data,isError,isloading,stats }
}

export default useCryptostats