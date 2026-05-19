import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import logoSrc from "./assets/withone-logo.png";

const kakaoLink = "https://pf.kakao.com/_sxgvsX";
const phoneLink = "tel:010-8317-1656";

const programs = [
  "사회복지사 2급",
  "보육교사",
  "평생교육사",
  "아동학사",
  "청소년지도사",
  "미용학사",
  "산업기사/기사 응시자격",
  "민간자격 과정",
];

const strengths = [
  {
    title: "개인별 학습설계",
    desc: "최종학력, 보유 과목, 목표 시기에 맞춰 필요한 과정을 정리합니다.",
    icon: ClipboardCheck,
  },
  {
    title: "실습 일정 안내",
    desc: "거주 지역과 일정에 맞춰 실습 준비 방향을 함께 확인합니다.",
    icon: MapPin,
  },
  {
    title: "진행 중 관리",
    desc: "수강 중 필요한 안내와 다음 학기 일정까지 놓치지 않도록 챙깁니다.",
    icon: ShieldCheck,
  },
];

const steps = [
  {
    step: "STEP 01",
    title: "상담 신청",
    desc: "카카오톡 채널로 희망 과정, 최종학력, 목표 시기를 남겨주세요.",
  },
  {
    step: "STEP 02",
    title: "과정 설계",
    desc: "필요 과목, 예상 기간, 실습 여부, 비용을 기준으로 플랜을 안내드립니다.",
  },
  {
    step: "STEP 03",
    title: "수강 진행",
    desc: "개강 일정에 맞춰 수강을 시작하고, 자격증 신청 단계까지 함께 안내합니다.",
  },
];

const faqs = [
  {
    q: "과제나 시험이 어렵지는 않나요?",
    a: "안내드리는 과정 기준으로는 과제·토론·퀴즈 제출 부담이 없고, 시험은 점수 부담 없이 이수 가능한 구조로 진행됩니다.",
  },
  {
    q: "사회복지사 2급은 얼마나 걸리나요?",
    a: "최종학력과 보유 과목에 따라 달라집니다. 전문대졸 이상과 고졸 학습자의 진행 방식이 다르기 때문에 상담 후 정확한 기간을 확인할 수 있습니다.",
  },
  {
    q: "실습도 안내받을 수 있나요?",
    a: "네. 거주 지역과 일정에 맞춰 실습 준비 방향과 진행 시 유의할 점을 안내드립니다.",
  },
  {
    q: "상담은 어디로 하면 되나요?",
    a: "카카오톡 채널로 문의하시거나 빠른 상담 버튼을 통해 전화 연결이 가능합니다. 상담 가능 시간 내 순차적으로 안내드립니다.",
  },
];

function W1Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src={logoSrc} alt="위드원 교육 로고" className="h-10 w-auto object-contain md:h-12" />
      <div>
        <p className="text-lg font-black leading-none tracking-tight text-slate-950">위드원 교육</p>
        <p className="mt-1 text-xs font-semibold tracking-[0.22em] text-slate-500">WITHONE EDUCATION</p>
      </div>
    </div>
  );
}

function SectionTitle({ label, title, desc }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {label && <p className="mb-3 text-sm font-bold tracking-[0.24em] text-lime-700">{label}</p>}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {desc && <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{desc}</p>}
    </div>
  );
}

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-5 p-6 text-left"
      >
        <span className="text-base font-bold text-slate-950 md:text-lg">{item.q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-6 pb-6 leading-8 text-slate-600">{item.a}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <W1Logo />
          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
            <a href="#about" className="hover:text-lime-700">위드원 소개</a>
            <a href="#program" className="hover:text-lime-700">과정 안내</a>
            <a href="#process" className="hover:text-lime-700">진행 절차</a>
            <a href="#faq" className="hover:text-lime-700">자주 묻는 질문</a>
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a href={kakaoLink} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-lime-800">
              카카오톡 상담
            </a>
            <a href={phoneLink} className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:border-lime-500 hover:text-lime-800">
              빠른 상담
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-50">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-lime-100/70 to-transparent" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-2 text-sm font-bold text-lime-800 shadow-sm">
                <CheckCircle2 className="h-4 w-4" />
                사회복지사 2급 · 학점은행제 과정 상담
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-7xl md:leading-[1.05]">
                시작부터 완주까지,
                <span className="block text-lime-700">위드원</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
                사회복지사 2급 자격증 준비, 복잡하게 돌아가지 않도록 필요한 과목부터 실습 일정, 자격증 신청 단계까지 한 번에 안내드립니다.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={kakaoLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-lime-900/10 transition hover:bg-lime-800">
                  카카오톡 상담 <MessageCircle className="h-5 w-5" />
                </a>
                <a href={phoneLink} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-950 shadow-sm transition hover:border-lime-500 hover:text-lime-800">
                  빠른 전화 상담 <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">상담은 카카오톡 채널 또는 빠른 전화 상담으로 연결됩니다.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">
              <div className="rounded-[1.5rem] border border-lime-100 bg-gradient-to-br from-lime-50 via-white to-white p-7 text-slate-950">
                <p className="text-sm font-bold tracking-[0.24em] text-lime-700">WITHONE CHECK LIST</p>
                <h2 className="mt-4 text-3xl font-black">상담 전 확인 포인트</h2>
                <div className="mt-7 space-y-4">
                  {[
                    "최종학력에 따라 필요한 과정이 달라집니다.",
                    "이미 이수한 과목은 중복 여부 확인이 필요합니다.",
                    "실습은 지역과 일정에 맞춰 미리 준비해야 합니다.",
                    "개강반 선택에 따라 자격증 취득 시기가 달라질 수 있습니다.",
                  ].map((text) => (
                    <div key={text} className="flex gap-3 rounded-2xl bg-lime-50 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-500" />
                      <p className="leading-7 text-slate-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionTitle
            label="WHY WITHONE"
            title="혼자 준비하지 않도록, 필요한 순간마다 함께합니다."
            desc="자격증 과정은 수강만 시작한다고 끝나는 것이 아닙니다. 과목 선택, 개강 일정, 실습 준비, 행정 절차까지 단계별 확인이 필요합니다."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 inline-flex rounded-2xl bg-lime-50 p-4 text-lime-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="program" className="bg-lime-50 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionTitle label="PROGRAM" title="상담 가능한 과정" desc="목표에 따라 필요한 과정과 진행 방법을 안내드립니다." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <div key={program} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-lg">
                  <GraduationCap className="mb-5 h-7 w-7 text-lime-700" />
                  <p className="text-lg font-black">{program}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 rounded-[2.5rem] bg-lime-700 p-8 text-white shadow-2xl shadow-lime-900/10 md:grid-cols-[0.95fr_1.05fr] md:p-12">
            <div>
              <p className="text-sm font-bold tracking-[0.24em] text-lime-100">SOCIAL WORKER LEVEL 2</p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">사회복지사 2급, 시작 전 설계가 중요합니다.</h2>
              <p className="mt-6 leading-9 text-lime-50">
                사회복지사 2급은 과목 이수와 실습, 행정 절차가 함께 진행되는 과정입니다. 처음 플랜이 잘못되면 기간과 비용이 늘어날 수 있어 시작 전 확인이 중요합니다.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["필수·선택 과목 확인", "최종학력별 과정 설계", "실습 가능 일정 확인", "자격증 신청 시기 안내"].map((item) => (
                <div key={item} className="rounded-3xl bg-white/12 p-6 backdrop-blur">
                  <CheckCircle2 className="mb-4 h-7 w-7 text-lime-100" />
                  <p className="text-lg font-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionTitle label="PROCESS" title="무료 상담부터 수강 진행까지" desc="처음 문의하시는 분도 쉽게 이해할 수 있도록 단계별로 안내드립니다." />
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.step} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="text-sm font-black tracking-[0.2em] text-lime-700">{item.step}</p>
                  <h3 className="mt-4 text-2xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href={kakaoLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-lime-800">
                카카오톡으로 상담하기 <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-5 py-20 md:px-8">
          <SectionTitle label="FAQ" title="자주 묻는 질문" desc="상담 전 많이 물어보시는 내용을 정리했습니다." />
          <div className="space-y-4">
            {faqs.map((item) => <FAQItem key={item.q} item={item} />)}
          </div>
        </section>

        <section className="bg-lime-50 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-lime-900/5 md:grid-cols-[1fr_0.9fr] md:p-12">
              <div>
                <p className="text-sm font-bold tracking-[0.24em] text-lime-700">CONTACT</p>
                <h2 className="mt-4 text-3xl font-black md:text-5xl">자격증 준비, 지금 확인해보세요.</h2>
                <p className="mt-6 max-w-2xl leading-9 text-slate-600">
                  최종학력, 희망 과정, 거주 지역, 목표 시기를 남겨주시면 가능한 일정과 준비 방향을 안내드립니다.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-7 text-slate-950">
                <MessageCircle className="mb-5 h-9 w-9 text-lime-700" />
                <h3 className="text-2xl font-black">상담 연결</h3>
                <p className="mt-4 leading-8 text-slate-600">상담 가능 시간 내 순차적으로 답변드립니다.</p>
                <div className="mt-7 grid gap-3">
                  <a href={kakaoLink} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-700 px-7 py-4 font-bold text-white transition hover:bg-lime-800">
                    카카오톡 채널 바로가기 <MessageCircle className="h-5 w-5" />
                  </a>
                  <a href={phoneLink} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-950 transition hover:border-lime-500 hover:text-lime-800">
                    빠른 상담 010-8317-1656 <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <W1Logo />
            <p className="mt-4 text-sm leading-7 text-slate-500">
              사회복지사 2급 · 보육교사 · 평생교육사 · 학점은행제 과정 상담<br />
              카카오톡 채널 상담 · 빠른 상담 010-8317-1656
            </p>
          </div>
          <div className="text-sm leading-7 text-slate-500 md:text-right">
            <p>대표 윤수경</p>
            <p>사업자등록번호 275-34-01632</p>
            <p>Copyright © WithOne Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
