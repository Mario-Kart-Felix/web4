import { useMemo } from 'react'
import useWeb4 from 'hooks/useWeb4'
import {
  getBep20Contract,
  getCakeContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getProfileContract,
  getIfoContract,
  getLotteryContract,
  getLotteryTicketContract,
  getMasterchefContract,
  getPointCenterIfoContract,
  getSouschefContract,
  getClaimRefundContract,
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useIfoContract = (address: string) => {
  const web4 = useWeb4()
  return useMemo(() => getIfoContract(address, web4), [address, web4])
}

export const useERC20 = (address: string) => {
  const web4 = useWeb4()
  return useMemo(() => getBep20Contract(address, web4), [address, web4])
}

export const useCake = () => {
  const web4 = useWeb4()
  return useMemo(() => getCakeContract(web4), [web4])
}

export const useBunnyFactory = () => {
  const web3 = useWeb3()
  return useMemo(() => getBunnyFactoryContract(web3), [web3])
}

export const usePancakeRabbits = () => {
  const web3 = useWeb3()
  return useMemo(() => getPancakeRabbitContract(web3), [web3])
}

export const useProfile = () => {
  const web3 = useWeb3()
  return useMemo(() => getProfileContract(web3), [web3])
}

export const useLottery = () => {
  const web4 = useWeb4()
  return useMemo(() => getLotteryContract(web3), [web4])
}

export const useLotteryTicket = () => {
  const web4 = useWeb4()
  return useMemo(() => getLotteryTicketContract(web4), [web4])
}

export const useMasterchef = () => {
  const web4 = useWeb3()
  return useMemo(() => getMasterchefContract(web4), [web4])
}

export const useSousChef = (id) => {
  const web4 = useWeb3()
  return useMemo(() => getSouschefContract(id, web4), [id, web4])
}

export const usePointCenterIfoContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getPointCenterIfoContract(web4), [web4])
}

export const useBunnySpecialContract = () => {
  const web4 = useWeb4()
  return useMemo(() => getBunnySpecialContract(web4), [web4])
}

export const useClaimRefundContract = () => {
  const web4 = useWeb4()
  return useMemo(() => getClaimRefundContract(web4), [web4])
}
