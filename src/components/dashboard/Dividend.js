import { useEffect, useState } from 'react'
import { useContractWrite, useAccount, useContractRead } from 'wagmi'
import asapbotabi from '../../asapbot.json'

import { readContract } from '@wagmi/core'

import {CityLevel, CityName} from './../../config/constants'

const Dividend = (props) => {


	const [withdrawableRewards, setWithdrawableRewards] = useState(null);
	const [totalRewards, setTotalRewards] = useState(null);
	const [totalRewardsWithdrawn, setTotalRewardsWithdrawn] = useState(null);
	const [asapBalance, setAsapBalance] = useState(null);

	const [tokenInfo, setTokenInfo] = useState(null);
	const [degenstreet, setDegenstreet] = useState(``);

	const { address, isConnecting, isDisconnected } = useAccount()
	// const account = useAccount({
	// 	onConnect({ address, connector, isReconnected }) {
	// 		console.log('Connected', { address, connector, isReconnected })
	// 	},
	// })
	const claim_datas = useContractWrite({
		address: '0xC36AD98E62598Ae24d4487d8012209f687c30D45',
		abi: asapbotabi,
		functionName: 'claim',
	})

	const detectStreet = (level) => {
		let city = '';
		switch(level) {
			case level >= CityLevel.whales:
				city = CityName[CityLevel.whales];
				break;
			case level >= CityLevel.sharks && level < CityLevel.whales:
				city = CityName[CityLevel.sharks];
				break;
			case level >= CityLevel.dolphine && level < CityLevel.sharks:
				city = CityName[CityLevel.dolphine];
				break;
			case level >1 && level < CityLevel.dolphine:
				city = CityName[CityLevel.degen];
				break;
			default:
				city=''
				break;
		}
		return city;
	}

	useEffect(() => {
		if (address) {
			(async () => {
				const fetchData = async () => {
					try {
						const data = await readContract({
							address: '0xC36AD98E62598Ae24d4487d8012209f687c30D45',
							abi: asapbotabi,
							functionName: 'getAccountInfo',
							args: [address]
						})
	
						setWithdrawableRewards((Number(data[1]) / 100000000000).toFixed(3))
						setTotalRewards((Number(data[2]) / 100000000000).toFixed(3))
						setTotalRewardsWithdrawn((Number(data[4]) / 100000000000).toFixed(3))
						console.log(`data from read contract`, data)
					}
					catch (e) {
						console.log(`error in read contract`, e);
						await fetchData();
					}
				}
				const getAsapBal = async () => {
					try {
						const data = await readContract({
							address: '0xc36ad98e62598ae24d4487d8012209f687c30d45',
							abi: asapbotabi,
							functionName: 'balanceOf',
							args: [address]
						});
	
						let bal = BigInt(0);
						try {
							bal = BigInt(data);
						}
						catch(error){
							console.log(`error in define bigint`, error);
							bal = BigInt(0);
						}
						setAsapBalance((Number(bal) / 100000000000).toFixed(3))
						setDegenstreet(asapBalance);
						
					}
					catch (e) {
						console.log(`error in read asap`, e);
						await getAsapBal();
					}
				}

				Promise.all([fetchData(), getAsapBal()]);
			})();
		}
	}, [address])
	useEffect(() => {
		const fetchTokenInfo = async () => {
			try {
				const response = await fetch('https://api.dexscreener.com/latest/dex/tokens/0xC36AD98E62598Ae24d4487d8012209f687c30D45');
				console.log(`response`, response)
				const data = await response.json();
				console.log(`datadatadata`, data)
				setTokenInfo({...data.pairs[0]});
				console.log("token info", data.pairs[0])
			} catch (error) {
				console.error('Error fetching token info:', error);
			}
		};

		fetchTokenInfo();
	}, []);
	const handleClaim = () => {
		claim_datas.write()
	}
	return (
		<div className="flex w-full flex-1 flex-col z-10 px-6 py-8 sm:px-10 sm:py-9">
			<h1 className="text-2xl font-semibold">Tax-Rewards</h1>
			<div className="flex gap-8 pt-8 flex-col 1.5xl:flex-row">
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Total Rewards</h3>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">${totalRewardsWithdrawn}</p>

					</div>

				</div>
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Claimed</h3>
						<div className="flex gap-4 items-center flex-wrap">
							<a className="break-keep px-5 py-2 border border-white rounded-full opacity-70" target="_blank" href="https://app.uniswap.org/#/swap?outputCurrency=0xC36AD98E62598Ae24d4487d8012209f687c30D45&chain=mainnet" >Buy ASAP</a>
						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">${totalRewards}</p>
					</div>

				</div>
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Withdrawable Rewards</h3>
						<div className="flex gap-4 items-center flex-wrap">
							<button
								className="break-keep px-5 py-2 border border-white rounded-full opacity-70" onClick={handleClaim}>Claim Now</button>

						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">${withdrawableRewards}</p>
						{/* <p className="text-[#92929D] text-sm pt-2">Compared to ($21340 last year)</p> */}
					</div>
				</div>
			</div>
			<div className="flex gap-8 pt-8 flex-col 1.5xl:flex-row">
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Balance</h3>
						<div className="flex gap-4 items-center flex-wrap">
						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">{asapBalance}</p>
					</div>
				</div>
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Price</h3>
						<div className="flex gap-4 items-center flex-wrap">

						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">${tokenInfo ? tokenInfo?.priceUsd : 0}</p>
					</div>
				</div>
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Marketcap</h3>
						<div className="flex gap-4 items-center flex-wrap">

						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">${tokenInfo?.liquidity ? tokenInfo?.liquidity?.usd : 0}</p>
					</div>
				</div>
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Circulating Supply </h3>
						<div className="flex gap-4 items-center flex-wrap">

						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">{tokenInfo?.liquidity ? tokenInfo?.liquidity?.base : 0}</p>
					</div>
				</div>
				
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">ASAP Alpha City Tiers Level </h3>
						<div className="flex gap-4 items-center flex-wrap">

						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">{degenstreet}</p>
					</div>
				</div>
			</div>
			{/* <div className="flex pt-14 flex-wrap gap w-full gap-5">
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Next Pool Release</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Total Payouts</p>
						<p className="font-semibold text-2xl text-[#FAFAFB]">${totalRewardsWithdrawn}</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Tax- Rewards Growth</p>
						<p className="font-semibold text-2xl text-[#FAFAFB]">+241.21%</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Your Staked sASAP</p>
						<p className="font-semibold text-2xl text-[#FAFAFB]">0</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Next Payout</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>sASAP Stoked</p>
						<p className="font-semibold text-2xl text-[#FAFAFB]">0</p>
					</div>
				</div>
			</div> */}
		</div>
	)
}
export default Dividend