import { useState } from "react"
import { Link } from "react-router-dom"

import Button from '@components/Button.jsx'

import IconOverview from '@/assets/images/icon-nav-overview.svg?react'
import IconTransactions from '@/assets/images/icon-nav-transactions.svg?react'
import IconBudgets from '@/assets/images/icon-nav-budgets.svg?react'
import IconPots from '@/assets/images/icon-nav-pots.svg?react'
import IconRecurring from '@/assets/images/icon-nav-recurring-bills.svg?react'
import LargeLogo from '@/assets/images/logo-large.svg?react'
import SmallLogo from '@/assets/images/logo-small.svg?react'
import IconMinimize from '@/assets/images/icon-minimize-menu.svg?react'


const Sidebar = ()=>{
  const [miniSidebar, setMiniSidebar] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const contents = [
    { placeholder: "Overview", icon: (isActive)=><IconOverview className={`h-5 w-5 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" }, 
    { placeholder: "Transactions", icon: (isActive)=><IconTransactions className={`h-5 w-5 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" },
    { placeholder: "Budgets", icon: (isActive)=><IconBudgets className={`h-5 w-5 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" },
    { placeholder: "Pots", icon: (isActive)=><IconPots className={`h-5 w-5 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" },
    { placeholder: "Recurring Bills", icon: (isActive)=><IconRecurring className={`h-5 w-5 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" },
  ]

  const renderElem = (content) => {
    const tab = content.placeholder.toLowerCase()
    const isActive = tab === activeTab
    const design_for_activetab = !miniSidebar ? "bg-white text-gray-900 rounded-r-lg w-full" : ""
    const general_tab_design = `text-white ${content.className}`
    return(
      <li className={`flex items-center h-12 `}> {/**${!miniSidebar ? "" : ""} */}
        <div className={`h-full w-1.5 ${isActive ? "bg-blue-700" : "bg-transparent"}`}></div> {/**this div isn't showing after i minimize */}
        <Link 
          to={content.link} 
          onClick={()=>handleActiveTab(tab)} 
          className={`flex justify-start items-center px-6 gap-4 h-full ${activeTab!==tab?general_tab_design: design_for_activetab}`}
        >
          {content.icon(isActive)} 
          {!miniSidebar ? content.placeholder : ""}
        </Link>
      </li>
    )
  }

  const handleActiveTab = (activeTabName) => {
    setActiveTab(activeTabName)
  }

  const handleMinimize = () => {
    setMiniSidebar((p) => !p)
  }

  const buttonDesign = "px-7 border-0 hover:bg-transparent bg-amber-500 text-white w-full h-12"
  const logoDesign = "px-7 pt-10 pb-15 flex items-center justify-start"

  return (
    <aside className={`overflow-hidden h-screen bg-gray-900 text-white rounded-r-2xl flex flex-col justify-start ${!miniSidebar ? "w-70":"w-20"} `}>
      {!miniSidebar ? (
        <section className={logoDesign}>
          <LargeLogo className="hover:text-blue-500"/>
        </section>):(
        <section className={logoDesign}>
          <SmallLogo className="hober:text-blue-500"/>
        </section>
      )}
      <ul className={`flex flex-col w-full flex-grow ${!miniSidebar ? "pr-12 " : "pr-2"}`}>
        {contents.map(content => renderElem(content))}
      </ul>
      <Button 
        children={
          <div className="flex justify-start gap-4 w-full h-5 items-center">
            <IconMinimize className={`h-full  ${miniSidebar?"rotate-180":""}`}/>
            {!miniSidebar?(<span className="flex h-full w-full items-center">
              Minimize Menu
            </span>):""}
          </div>
        }
        onClick={handleMinimize}
        className={buttonDesign}
      />
    </aside>
  )
}

export default Sidebar