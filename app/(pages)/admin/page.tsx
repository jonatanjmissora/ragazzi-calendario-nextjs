import DashboardContainer from '@/app/components/Dashboard/DashboardContainer'
import React from 'react'

export default function page() {
  return (
    <div className="flex-1 font-[family-name:var(--font-geist-sans)]">
      <DashboardContainer page={"admin"}>
        ADMIN
      </DashboardContainer>
    </div>
  )
}
