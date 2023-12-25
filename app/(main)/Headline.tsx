'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>开发者
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative rounded-2xl bg-black/5 p-1 disabled:inline-block dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      <del>设计师</del>
    </span>
  )
}

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:animate-bounce" />
      <span>爱篮球</span>
    </span>
  )
}

function Founder() {
  return (
    <motion.span className="group" whileHover="hover">
      <UserSecurityIcon className="mr-1 inline-flex" />
      <span>新手奶爸👨‍🍼</span>
    </motion.span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        <Developer />，<Designer />，
        <br />
        <OCD />，<Founder />
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        <Balancer>我是 tan61</Balancer>
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://twitter.com/tanduzhi"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://aka.tan61.dev/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://aka.tan61.dev/github"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://telegram.me/tan_61"
          aria-label="我的 Telegram"
          platform="telegram"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:hi@tan61.dev"
          aria-label="我的邮箱"
          platform="mail"
        />
      </div>
    </div>
  )
}
