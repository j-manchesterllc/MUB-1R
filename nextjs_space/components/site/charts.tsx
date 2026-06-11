'use client'

import { useEffect, useState } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from 'recharts'
import { weightLedger, risks } from '@/lib/data'

const weightColors = ['#60B5FF', '#FF9149', '#80D8C3', '#A19AD3', '#FF90BB', '#72BF78', '#FF9898']

function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

/* ---------------- Weight Chart ---------------- */

function WeightStatic() {
  const data = (weightLedger ?? []).map((w) => ({ name: w?.group ?? '', mass: w?.mass ?? 0 }))
  const max = Math.max(1, ...data.map((d) => d.mass))
  return (
    <div className="w-full py-2" aria-label="Weight budget by component group, in kilograms">
      <div className="space-y-2.5">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center gap-3">
            <span className="w-[150px] shrink-0 text-xs text-right text-muted-foreground truncate">{d.name}</span>
            <div className="flex-1 h-5 rounded-sm bg-secondary/40 overflow-hidden">
              <div
                className="h-full rounded-sm"
                style={{ width: `${(d.mass / max) * 100}%`, background: weightColors[i % weightColors.length] }}
              />
            </div>
            <span className="w-12 shrink-0 text-xs font-mono text-foreground">{d.mass} kg</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground text-right">Mass (kg)</p>
    </div>
  )
}

export function WeightChart() {
  const mounted = useMounted()
  const data = (weightLedger ?? []).map((w) => ({ name: w?.group ?? '', mass: w?.mass ?? 0 }))

  // Always render the data-bearing static version in SSR / first paint.
  if (!mounted) {
    return (
      <div className="w-full min-h-[320px]">
        <WeightStatic />
      </div>
    )
  }

  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 20 }}>
          <XAxis
            type="number"
            tickLine={false}
            tick={{ fontSize: 10, fill: '#8b9bb4' }}
            label={{ value: 'Mass (kg)', position: 'insideBottom', offset: -10, style: { textAnchor: 'middle', fontSize: 11, fill: '#8b9bb4' } }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={150}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#c4d0e0' }}
          />
          <Tooltip wrapperStyle={{ fontSize: 11 }} contentStyle={{ background: '#0d1525', border: '1px solid #1e2a40', borderRadius: 6 }} />
          <Bar dataKey="mass" name="Mass (kg)" radius={[0, 4, 4, 0]}>
            {data?.map?.((_, i) => (
              <Cell key={i} fill={weightColors?.[i % (weightColors?.length ?? 1)] ?? '#60B5FF'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ---------------- Risk Chart ---------------- */

function RiskStatic() {
  const data = (risks ?? []).map((r) => ({ name: r?.id ?? '', Pre: r?.pre ?? 0, Residual: r?.post ?? 0 }))
  const max = Math.max(1, ...data.map((d) => d.Pre))
  return (
    <div className="w-full py-2" aria-label="Pre-mitigation vs residual risk scores by risk ID">
      <div className="flex items-center gap-4 mb-3 text-xs">
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: '#FF9149' }} /> Pre-mitigation</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: '#60B5FF' }} /> Residual (Rev B)</span>
      </div>
      <div className="space-y-2">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-3">
            <span className="w-12 shrink-0 text-xs font-mono text-right text-muted-foreground">{d.name}</span>
            <div className="flex-1 space-y-1">
              <div className="h-2.5 rounded-sm" style={{ width: `${(d.Pre / max) * 100}%`, background: '#FF9149', minWidth: 4 }} />
              <div className="h-2.5 rounded-sm" style={{ width: `${(d.Residual / max) * 100}%`, background: '#60B5FF', minWidth: 4 }} />
            </div>
            <span className="w-16 shrink-0 text-xs font-mono text-foreground text-right">{d.Pre} → {d.Residual}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function RiskChart() {
  const mounted = useMounted()
  const data = (risks ?? []).map((r) => ({ name: r?.id ?? '', Pre: r?.pre ?? 0, Residual: r?.post ?? 0 }))

  if (!mounted) {
    return (
      <div className="w-full min-h-[340px]">
        <RiskStatic />
      </div>
    )
  }

  return (
    <div className="w-full h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 35 }}>
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 10, fill: '#c4d0e0' }}
            angle={-45}
            textAnchor="end"
            height={50}
            interval={0}
          />
          <YAxis
            tickLine={false}
            tick={{ fontSize: 10, fill: '#8b9bb4' }}
            label={{ value: 'Risk Score (L×S)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 11, fill: '#8b9bb4' } }}
          />
          <Tooltip wrapperStyle={{ fontSize: 11 }} contentStyle={{ background: '#0d1525', border: '1px solid #1e2a40', borderRadius: 6 }} />
          <Legend verticalAlign="top" wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="Pre" name="Pre-mitigation" fill="#FF9149" radius={[3, 3, 0, 0]} />
          <Bar dataKey="Residual" name="Residual (Rev B)" fill="#60B5FF" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
