import { useState } from "react"
import { Link } from "react-router-dom"

import {ReactComponent as iconOverview} from "@/assets/images/icon-nav-overview.svg" //vs code is marking these codes as unused in the code
import {ReactComponent as iconTransactions} from "@/assets/images/icon-nav-transactions.svg"
import {ReactComponent as iconBudgets} from "@/assets/images/icon-nav-budgets.svg"
import {ReactComponent as iconPots} from "@/assets/images/icon-nav-pots.svg"
import {ReactComponent as iconRecurring} from "@/assets/images/icon-nav-recurring-bills.svg"


const Sidebar = ()=>{
  const [activeTab, setActiveTab] = useState("overview")
  const contents = [
    { placeholder: "Overview", icon: (isActive)=><iconOverview className={`h-7 w-7 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" }, 
    { placeholder: "Transactions", icon: (isActive)=><iconTransactions className={`h-7 w-7 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" },
    { placeholder: "Budgets", icon: (isActive)=><iconBudgets className={`h-7 w-7 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" },
    { placeholder: "Pots", icon: (isActive)=><iconPots className={`h-7 w-7 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" },
    { placeholder: "Recurring Bills", icon: (isActive)=><iconRecurring className={`h-7 w-7 ${isActive? "text-blue-500":"text-white"}`}/>, className: "", link: "#" },
  ]

  const renderElem = (content) => {
    const tab = content.placeholder.toLowerCase()
    const isActive = tab === activeTab
    const design_for_activetab = "bg-white text-gray-900 rounded-r-lg"
    const general_tab_design = `text-white ${content.className}`
    return(
      <li className="pr-8">
        <Link 
          to={content.link} 
          onClick={()=>handleActiveTab(tab)} 
          className={`flex justify-start items-center gap-4 px-8 h-12 ${activeTab!==tab?general_tab_design: design_for_activetab}`}
        >
          {content.icon(isActive)} 
          {content.placeholder}
        </Link>
      </li>
    )
  }

  const handleActiveTab = (activeTabName) => {
    setActiveTab(activeTabName)
  }

  return (
    <aside>
      
      <ul className="flex-col bg-gray-900 text-white h-screen w-70">
        {contents.map(content => renderElem(content))}
      </ul>
    </aside>
  )
}

export default Sidebar