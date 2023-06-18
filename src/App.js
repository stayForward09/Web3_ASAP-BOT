import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {  mainnet } from 'wagmi/chains'

const chains = [ mainnet]
const projectId = 'ac3845f31b4dac127a283e7174f65397'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)
const App = () => {
  const location = useLocation()
  console.log(ethereumClient)
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
      <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Index />} />
        <Route path='/dashboard' element={
        <Dashboard 
        ethereumClient={ethereumClient}
        />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
    
  )
}
export default App