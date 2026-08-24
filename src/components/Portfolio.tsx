"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FileText, BarChart3, Workflow, Database, Users, ExternalLink, Play, ChevronLeft, ChevronRight, Copy, Check } from "lucide-react"

// Portfolio Item Type
type PortfolioItem = {
  id: number
  title: string
  category: "Documentation" | "Data Analyst" | "System Analyst" | "Database SQL" | "Training Session"
  description: string
  date: string
  client?: string
  previewType: "pdf" | "youtube" | "images" | "code" | "gallery"
  previewData: {
    pdfUrl?: string
    videoId?: string
    thumbnail?: string
    images?: string[]
    code?: string
  }
  tools?: string[]
}

// Dummy Data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "User Guide Module Collective Payment",
    category: "Documentation",
    description: "Complete technical documentation for QRIS and Virtual Account integration with multiple banking partners.",
    date: "Apr 2025",
    client: "BAPENDA KABUPATEN MAJALENGKA",
    previewType: "pdf",
    previewData: {
      pdfUrl: "/porto/kolektifguide.pdf",
      thumbnail: "/porto/payment-gateway-cover.jpg"
    },
    tools: ["MS Word, Canva"]
  },
  { 
    id: 2,
    title: "Sharing Session Reconciliation Online For BAPENDA Role ",
    category: "Training Session",
    description: "Comprehensive training presentation on online reconciliation system operations for regional tax revenue management. Covers end-to-end reconciliation workflows, discrepancy handling procedures, and real-time transaction monitoring for BAPENDA officers.",
    date: "Mar 2022",
    client: "BAPENDA ROLE RECONCILIATION",
    previewType: "pdf",
    previewData: {
      pdfUrl: "/porto/guider_rekon.pdf",
      thumbnail: "/porto/payment-gateway-cover.jpg"
    },
    tools: ["Canva"]
  },
  { 
    id: 3,
    title: "Webservice API Documentation Specification",
    category: "Documentation",
    description: "Technical API documentation covering webservice endpoints for tax payment integration, including endpoint specifications, parameter definitions, JSON payload structures, authentication tokens, status codes, and sample API calls for third-party integration.",
    date: "jun 2025",
    client: "BAPENDA",
    previewType: "pdf",
    previewData: {
      pdfUrl: "/porto/webserviceapi.pdf",
      thumbnail: "/porto/payment-gateway-cover.jpg"
    },
    tools: ["Ms Word, Postman"]
  },
  { 
    id: 4,
    title: "Testing Report API Tax Opsen Bank NTT",
    category: "Documentation",
    description: "Comprehensive testing documentation for Bank NTT Tax Opsen API, covering endpoint response validation, settlement date configuration, payment transaction fields verification (opsen_collectible, pajda_denda, pajda_total_bayar), JSON schema compliance, and integration test results for provincial tax sharing system.",
    date: "Sep 2025",
    client: "BAPENDA & Bank NTT",
    previewType: "pdf",
    previewData: {
      pdfUrl: "/porto/testingdoc.pdf",
      thumbnail: "/porto/payment-gateway-cover.jpg"
    },
    tools: ["Ms Word, Postman"]
  },
  { 
    id: 5,
    title: "User Guide Payment VA",
    category: "Documentation",
    description: "Comprehensive payment guide for regional tax collection using Virtual Account system, covering portal access procedures, VA number generation process, payment instructions across multiple banking channels, and transaction confirmation steps for taxpayers.",
    date: "Agt 2024",
    client: "BAPENDA & Bank SUMSELBABEL",
    previewType: "pdf",
    previewData: {
      pdfUrl: "/porto/testingdoc.pdf",
      thumbnail: "/porto/payment-gateway-cover.jpg"
    },
    tools: ["Ms Word"]
  },
  {
    id: 6,
    title: "Database Payment Merchant PBB Tax",
    category: "Database SQL",
    description: "This query retrieves partner data and their associated payment merchant lists, grouped by region and tax type, to support business initiatives for expanding payment channels.",
    date: "Feb 2025",
    client: "Account Manager",
    previewType: "code",
    previewData: {
      code: `
      -- PBB INDIVIDUAL --
        SELECT
          A.CSM_TM_CID,
          A.CSM_TM_CA,
          'BANK NTT' AS MITRA_PEMBAYARAN,
          A.CSM_TM_AREA_CODE,
          ( SELECT B.CSM_AREA_NAME FROM CSCMOD_TAX_AREA_LIST B WHERE B.CSM_AREA_CODE = A.CSM_TM_AREA_CODE ),
          'PBB-P2' AS PRODUK 
        FROM
          CSCMOD_TAX_TRAN_MAIN A 
        WHERE
          A.CSM_TM_TAX_TYPE = '0002' 
        GROUP BY
          A.CSM_TM_CID,
          A.CSM_TM_CA,
          A.CSM_TM_AREA_CODE 
        ORDER BY
          A.CSM_TM_AREA_CODE;
          
      -- PBB KOLEKTIF --
        SELECT
          A.CSM_TM_CID,
          A.CSM_TM_CA,
          'NTT KOLEKTIF' AS MITRA_PEMBAYARAN,
          CONCAT('00',A.CSM_TM_INPUT_3),
        ( SELECT B.CSM_AREA_NAME FROM CSCMOD_TAX_AREA_LIST B WHERE B.CSM_AREA_CODE = CONCAT('00',A.CSM_TM_INPUT_3) ),
          'PBB-P2' AS PRODUK 
        FROM
          CSCMOD_GP_TRAN_MAIN A 
        GROUP BY
          A.CSM_TM_CID,
          A.CSM_TM_CA,
          A.CSM_TM_INPUT_3 
        ORDER BY
          A.CSM_TM_INPUT_3;`
    },
    tools: ["Navicat", "MySQL", "WinSCP SSH", "MS Excel"]
  },
  {
    id: 7,
    title: "Database Payment Merchant BPHTB Tax",
    category: "Database SQL",
    description: "This query retrieves partner data and their associated payment merchant lists, grouped by region and tax type, to support business initiatives for expanding payment channels.",
    date: "Feb 2025",
    client: "Account Manager",
    previewType: "code",
    previewData: {
      code: `
      SELECT
        A.CSM_TM_CID,
        A.CSM_TM_CA,	
        'BANK NTT' AS MITRA_PEMBAYARAN,
        A.CSM_TM_AREA_CODE,
        ( SELECT B.CSM_AREA_NAME FROM CSCMOD_TAX_AREA_LIST B WHERE B.CSM_AREA_CODE = A.CSM_TM_AREA_CODE ),
        'BPHTB' AS PRODUK 
      FROM
        CSCMOD_TAX_TRAN_MAIN A 
      WHERE
        A.CSM_TM_TAX_TYPE = '0001' 
      GROUP BY
        A.CSM_TM_CID,
        A.CSM_TM_CA,
        A.CSM_TM_AREA_CODE 
      ORDER BY
        A.CSM_TM_AREA_CODE;`
    },
    tools: ["Navicat", "MySQL", "WinSCP SSH", "MS Excel"]
  },
  {
    id: 8,
    title: "Database Payment Merchant PJDL Tax",
    category: "Database SQL",
    description: "This query retrieves partner data and their associated payment merchant lists, grouped by region and tax type, to support business initiatives for expanding payment channels.",
    date: "Feb 2025",
    client: "Account Manager",
    previewType: "code",
    previewData: {
      code: `
    SELECT
      A.CSM_TM_CID,
      A.CSM_TM_CA,
      'BANK NTT' AS MITRA_PEMBAYARAN,
      A.CSM_TM_AREA_CODE,
      ( SELECT B.CSM_AREA_NAME FROM CSCMOD_TAX_AREA_LIST B WHERE B.CSM_AREA_CODE = A.CSM_TM_AREA_CODE ),
      '9-PAJAK DAERAH' AS PRODUK 
    FROM
      CSCMOD_TAX_TRAN_MAIN A 
    WHERE
      A.CSM_TM_TAX_TYPE IN (
        '0004',
        '0005',
        '0006',
        '0007',
        '0008',
        '0009',
        '0010',
        '0011',
        '0012',
        '0024',
        '0025',
        '0026',
        '0027',
        '0028',
        '0029',
        '0030',
        '0031',
        '0032' 
      ) 
    GROUP BY
      A.CSM_TM_CID,
      A.CSM_TM_CA,
      A.CSM_TM_AREA_CODE 
    ORDER BY
      A.CSM_TM_AREA_CODE;`
    },
    tools: ["Navicat", "MySQL", "WinSCP SSH", "MS Excel"]
  },
{
    id: 9,
    title: "Query Rekon Piutang",
    category: "Database SQL",
    description: "This query serves to resolve Bapenda's annual issue regarding receivable reconciliation.",
    date: "nov 2025",
    client: "BAPENDA",
    previewType: "code",
    previewData: {
      code: `
    1. BANDINGKAN SISMIOP ADA (PIUTANG) VS V-TAX TIDAK ADA(BUKAN PIUTANG)
	SELECT
		A.NOP,
		A.THN_PAJAK_SPPT,
		A.NM_WP_SPPT,
		A.PBB_YG_HARUS_DIBAYAR_SPPT 
	FROM
		SALDO_PIUTANG_AWAL_2021_SISMIOP A
		LEFT JOIN PBB_SPPT_SALDO_PIUTANG_AWAL_2021_VTAX B ON A.NOP = B.NOP 
		AND A.THN_PAJAK_SPPT = B.SPPT_TAHUN_PAJAK 
	WHERE
		ISNULL( B.NOP ) 
	ORDER BY
		A.THN_PAJAK_SPPT,
		A.NOP;


2. EXPORT POINT 1 ( untuk dikirim ke dinas )
	SELECT
		A.NOP AS 'NOP',
		A.THN_PAJAK_SPPT AS 'TAHUN PAJAK',
		A.NM_WP_SPPT,
		A.PBB_YG_HARUS_DIBAYAR_SPPT,
		B.SPPT_PBB_HARUS_DIBAYAR,
		B.PAYMENT_FLAG,
		B.PAYMENT_PAID,
	IF
		(( B.PAYMENT_FLAG <> '1' OR ISNULL( B.PAYMENT_FLAG ) ), 'DATA TIDAK ADA', 'SUDAH LUNAS' ) AS STATUS 
	FROM
		SALDO_PIUTANG_AWAL_2021_SISMIOP_TIDAK_ADA A
		LEFT JOIN GW_PBB.PBB_SPPT B ON A.NOP = B.NOP 
		AND A.THN_PAJAK_SPPT = B.SPPT_TAHUN_PAJAK;


3. BANDINGKAN V-TAX ADA (PIUTANG) VS SISMIOP TIDAK ADA (BUKAN PIUTANG)
	SELECT
		A.NOP,
		A.SPPT_TAHUN_PAJAK,
		A.WP_NAMA,
		A.SPPT_PBB_HARUS_DIBAYAR 
	FROM
		PBB_SPPT_SALDO_PIUTANG_AWAL_2021_VTAX A
		LEFT JOIN SALDO_PIUTANG_AWAL_2021_SISMIOP B ON A.NOP = B.NOP 
		AND B.THN_PAJAK_SPPT = A.SPPT_TAHUN_PAJAK 
	WHERE
		ISNULL( B.NOP ) 
	ORDER BY
		A.SPPT_TAHUN_PAJAK,
		A.NOP;


4. EXPORT POINT 3 ( untuk dikirim ke dinas )
	SELECT
		A.NOP,
		A.SPPT_TAHUN_PAJAK,
		A.WP_NAMA,
		A.SPPT_PBB_HARUS_DIBAYAR,
		A.PAYMENT_FLAG,
		A.PAYMENT_PAID,
	IF
		(( A.PAYMENT_FLAG <> '1' OR ISNULL( A.PAYMENT_FLAG ) ), 'BELUM LUNAS', 'SUDAH LUNAS' ) AS STATUS 
	FROM
		PBB_SPPT_SALDO_PIUTANG_AWAL_2021_VTAX_TIDAK_ADA A 
	ORDER BY
		A.SPPT_TAHUN_PAJAK,
		A.NOP;
		

5. KETETAPAN SISMIOP VS V-TAX BERBEDA ( untuk dikirim ke dinas )
	SELECT
		A.NOP,
		A.THN_PAJAK_SPPT,
		A.NM_WP_SPPT,
		A.PBB_YG_HARUS_DIBAYAR_SPPT,
		B.SPPT_PBB_HARUS_DIBAYAR,
		B.PAYMENT_FLAG,
		B.PAYMENT_PAID 
	FROM
		SALDO_PIUTANG_AWAL_2021_SISMIOP A
		JOIN GW_PBB.PBB_SPPT B ON A.NOP = B.NOP 
		AND A.THN_PAJAK_SPPT = B.SPPT_TAHUN_PAJAK 
	WHERE
		A.PBB_YG_HARUS_DIBAYAR_SPPT <> B.SPPT_PBB_HARUS_DIBAYAR 
	ORDER BY
		A.THN_PAJAK_SPPT,
		A.NOP;`
    },
    tools: ["Navicat", "MySQL", "WinSCP SSH", "MS Excel"]
  },
  { 
    id: 10,
    title: "Speaker Cross-divisional workshop presentation materials session 1",
    category: "Training Session",
    description: "The material for this session focuses on introducing local taxes to interconnected divisions. I am serving as the speaker for this workshop to enhance the divisions understanding, thereby ensuring smoother and more efficient operations.",
    date: "Jun 2024",
    client: "Internal Division",
    previewType: "pdf",
    previewData: {
      pdfUrl: "/porto/Workshop1.pdf",
      thumbnail: "/porto/payment-gateway-cover.jpg"
    },
    tools: ["Canva"]
  },
  { 
    id: 11,
    title: "Speaker Cross-divisional workshop presentation materials session 2",
    category: "Training Session",
    description: "The material for this session focuses on payment code varians. I am serving as the speaker for this workshop to enhance the divisions understanding, thereby ensuring smoother and more efficient operations.",
    date: "Jun 2024",
    client: "Internal Division",
    previewType: "pdf",
    previewData: {
      pdfUrl: "/porto/Workshop2.pdf",
      thumbnail: "/porto/payment-gateway-cover.jpg"
    },
    tools: ["Canva"]
  },
  {
    id: 12,
    title: "Query Data Piutang Pajak PBB",
    category: "Database SQL",
    description: "SQL query for outstanding tax receivables analysis, retrieving unpaid tax obligations data grouped by taxpayer, tax type, and due date to support revenue collection strategies and dunning letter generation for regional government finance departments.",
    date: "Jan 2023",
    client: "Account Manager & BAPENDA",
    previewType: "code",
    previewData: {
      code: `
      SELECT
        A.NOP AS 'NOP',
        A.WP_NAMA AS 'NAMA WP',
        A.WP_ALAMAT AS 'ALAMAT WP',
        A.WP_KELURAHAN AS 'KELURAHAN WP',
        A.OP_ALAMAT AS 'ALAMAT OP',
        A.OP_KECAMATAN AS 'KECAMATAN OP',
        A.OP_KELURAHAN AS 'KELURAHAN OP',
        A.OP_RT, AS 'RT OP'
        A.OP_RW AS 'RW OP',
        A.OP_LUAS_BUMI AS 'LUAS BUMI',
        A.OP_LUAS_BANGUNAN AS 'LUAS BANGUNAN',
        A.OP_NJOP_BUMI AS 'NJOP BUMI',
        A.OP_NJOP_BANGUNAN AS 'NJOP BANGUNAN',
        A.SPPT_TAHUN_PAJAK AS 'TAHUN PAJAK',
        A.SPPT_TANGGAL_JATUH_TEMPO AS 'TANGGAL JATUH TEMPO',
        A.SPPT_PBB_HARUS_DIBAYAR AS 'NILAI KETETAPAN',
      IF
        ( A.PAYMENT_FLAG = 1, A.PBB_DENDA, '0' ) AS 'DENDA',
      IF
        ( A.PAYMENT_FLAG = 1, A.PBB_TOTAL_BAYAR, '0' ) AS 'TOTAL BAYAR',
      IF
        ( A.PAYMENT_FLAG = 1, 'Lunas', 'Belum Bayar' ) AS 'STATUS',
      IF
        ( A.PAYMENT_FLAG = 1, A.PAYMENT_PAID, '' ) AS 'TANGGAL BAYAR',
      IF
        ( A.PAYMENT_FLAG = 1, B.CDC_B_NAME, '' ) AS 'TEMPAT BAYAR' 
      FROM
        PBB_SPPT A
        LEFT JOIN CDCCORE_BANK B ON A.PAYMENT_BANK_CODE = B.CDC_B_ID 
      WHERE
        (
        ( A.PAYMENT_FLAG <> 1 OR ISNULL( A.PAYMENT_FLAG ) ) 
        OR ( A.PAYMENT_FLAG = 1 AND A.PAYMENT_PAID > '2018-12-31 23:59:59' ) 
        ) 
      ORDER BY
        A.SPPT_TAHUN_PAJAK,
        A.NOP;`
    },
    tools: ["Navicat", "MySQL", "WinSCP SSH", "MS Excel"]
  },

//   {
//     id: 2,
//     title: "Municipal Revenue Dashboard Analysis",
//     category: "Data Analyst",
//     description: "Real-time revenue monitoring dashboard covering 60+ municipalities with transaction analytics.",
//     date: "Jul 2023",
//     client: "Regional Government",
//     previewType: "youtube",
//     previewData: {
//       videoId: "dQw4w9WgXcQ",
//       thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
//     },
//     tools: ["PostgreSQL", "Power BI", "Python"]
//   },
//   {
//     id: 3,
//     title: "E-Government System Architecture",
//     category: "System Analyst",
//     description: "Complete system design including ERD, use case diagrams, and system flow for regional tax management system.",
//     date: "Jun 2023",
//     client: "PT Mutiara Bintang Abadi",
//     previewType: "images",
//     previewData: {
//       images: ["/porto/egov-architecture-1.jpg", "/porto/egov-architecture-2.jpg", "/porto/egov-architecture-3.jpg"]
//     },
//     tools: ["UML", "BPMN", "Lucidchart"]
//   },
//   {
//     id: 4,
//     title: "Database Performance Optimization",
//     category: "Database Administrator",
//     description: "Query optimization and indexing strategy that reduced average response time by 65%.",
//     date: "May 2023",
//     client: "Internal Project",
//     previewType: "code",
//     previewData: {
//       code: `-- Optimized Query for Transaction Reconciliation
// SELECT 
//   t.transaction_id,
//   t.amount,
//   t.status,
//   m.municipality_name,
//   COUNT(*) OVER (PARTITION BY m.municipality_id) as total_transactions
// FROM transactions t
// JOIN municipalities m ON t.municipality_id = m.id
// WHERE t.created_at >= CURRENT_DATE - INTERVAL '30 days'
//   AND t.status = 'success'
// ORDER BY t.created_at DESC;`
//     },
//     tools: ["PostgreSQL", "MySQL", "Query Analyzer"]
//   },
//   {
//     id: 5,
//     title: "Payment System Training - Bank Partners",
//     category: "Training Session",
//     description: "Comprehensive training for 25+ participants covering payment gateway integration and reconciliation process.",
//     date: "Apr 2023",
//     client: "Regional Banks",
//     previewType: "gallery",
//     previewData: {
//       images: ["/porto/training-session-1.jpg", "/porto/training-session-2.jpg", "/porto/training-session-3.jpg"]
//     },
//     tools: ["PowerPoint", "Zoom", "Miro"]
//   },
//   {
//     id: 6,
//     title: "API Integration Requirements Document",
//     category: "Documentation",
//     description: "Detailed API specification for H2H integration with external payment partners including Tokopedia and Indomaret.",
//     date: "Mar 2023",
//     client: "E-Commerce Partners",
//     previewType: "pdf",
//     previewData: {
//       pdfUrl: "/porto/api-integration-spec.pdf",
//       thumbnail: "/porto/api-integration-cover.jpg"
//     },
//     tools: ["Postman", "Swagger", "Notion"]
//   },
//   {
//     id: 7,
//     title: "Transaction Trend Analysis Q1 2023",
//     category: "Data Analyst",
//     description: "Quarterly analysis of payment trends across all municipalities with predictive insights.",
//     date: "Mar 2023",
//     client: "Management Report",
//     previewType: "youtube",
//     previewData: {
//       videoId: "dQw4w9WgXcQ",
//       thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
//     },
//     tools: ["Excel", "Tableau", "SQL"]
//   },
//   {
//     id: 8,
//     title: "Regional Tax System - Functional Requirements",
//     category: "System Analyst",
//     description: "Complete functional requirement analysis for PBB and BPHTB tax management system.",
//     date: "Feb 2023",
//     client: "Regional Government",
//     previewType: "images",
//     previewData: {
//       images: ["/porto/tax-system-req-1.jpg", "/porto/tax-system-req-2.jpg", "/porto/tax-system-req-3.jpg"]
//     },
//     tools: ["Figma", "Miro", "Confluence"]
//   }
]

const categories = [
  { name: "All", icon: <Workflow size={16} />, count: portfolioItems.length },
  { name: "Documentation", icon: <FileText size={16} />, count: portfolioItems.filter(i => i.category === "Documentation").length },
  { name: "Data Analyst", icon: <BarChart3 size={16} />, count: portfolioItems.filter(i => i.category === "Data Analyst").length },
  { name: "System Analyst", icon: <Workflow size={16} />, count: portfolioItems.filter(i => i.category === "System Analyst").length },
  { name: "Database SQL", icon: <Database size={16} />, count: portfolioItems.filter(i => i.category === "Database SQL").length },
  { name: "Training Session", icon: <Users size={16} />, count: portfolioItems.filter(i => i.category === "Training Session").length }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isCopied, setIsCopied] = useState(false)
  const itemsPerPage = 6

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredItems.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  // Copy to clipboard function
  const handleCopyCode = () => {
    if (selectedItem?.previewData.code) {
      navigator.clipboard.writeText(selectedItem.previewData.code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Work Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Portfolio</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm max-w-xl mx-auto">
              Collection of technical documentation, analysis reports, system designs, and training materials from real-world projects.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryChange(cat.name)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat.name
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === cat.name ? "bg-blue-500" : "bg-slate-200 text-slate-600"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid with Slide Animation */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer border border-slate-100"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                    {item.previewType === "youtube" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <Play className="text-white z-10 group-hover:scale-125 transition-transform" size={48} />
                        <img 
                          src={item.previewData.thumbnail} 
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {item.previewType === "images" && item.previewData.images && (
                      <img 
                        src={item.previewData.images[0]} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    {item.previewType === "pdf" && (
                      <div className="flex items-center justify-center h-full">
                        <FileText className="text-blue-400" size={64} />
                      </div>
                    )}
                    {item.previewType === "code" && (
                      <div className="flex items-center justify-center h-full">
                        <Database className="text-indigo-400" size={64} />
                      </div>
                    )}
                    {item.previewType === "gallery" && item.previewData.images && (
                      <img 
                        src={item.previewData.images[0]} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-slate-700">
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{item.date}</span>
                      {item.client && (
                        <>
                          <span>•</span>
                          <span>{item.client}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tools */}
                    {item.tools && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tools.slice(0, 3).map((tool, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] px-2 py-1 bg-slate-50 text-slate-600 rounded-md font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* View Button */}
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-bold pt-2 group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows - Only show if more than 6 items */}
          {filteredItems.length > itemsPerPage && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed opacity-50"
                    : "bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-110"
                }`}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-slate-100 text-slate-300 cursor-not-allowed opacity-50"
                    : "bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-110"
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No portfolio items found in this category.</p>
          </div>
        )}

        {/* Pagination Dots Indicator */}
        {filteredItems.length > itemsPerPage && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === page
                    ? "w-8 h-2 bg-blue-600"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Page Info */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-700">{startIndex + 1}</span> to{" "}
              <span className="font-bold text-slate-700">{Math.min(endIndex, filteredItems.length)}</span> of{" "}
              <span className="font-bold text-slate-700">{filteredItems.length}</span> items
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Content */}
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">
                      {selectedItem.category}
                    </span>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    {selectedItem.title}
                  </h2>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{selectedItem.date}</span>
                    {selectedItem.client && (
                      <>
                        <span>•</span>
                        <span>{selectedItem.client}</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Preview Content */}
                <div className="bg-slate-50 rounded-2xl overflow-hidden">
                  {/* PDF Preview */}
                  {selectedItem.previewType === "pdf" && selectedItem.previewData.pdfUrl && (
                    <iframe
                      src={selectedItem.previewData.pdfUrl}
                      className="w-full h-[500px]"
                      title="PDF Preview"
                    />
                  )}

                  {/* YouTube Preview */}
                  {selectedItem.previewType === "youtube" && selectedItem.previewData.videoId && (
                    <iframe
                      width="100%"
                      height="500"
                      src={`https://www.youtube.com/embed/${selectedItem.previewData.videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0"
                    />
                  )}

                  {/* Images Preview */}
                  {selectedItem.previewType === "images" && selectedItem.previewData.images && (
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {selectedItem.previewData.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Preview ${idx + 1}`}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  )}

                  {/* Code Preview */}
                  {selectedItem.previewType === "code" && selectedItem.previewData.code && (
                    <div className="relative">
                      {/* Copy Button */}
                      <button
                        onClick={handleCopyCode}
                        className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-bold transition-all shadow-lg"
                      >
                        {isCopied ? (
                          <>
                            <Check size={14} />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                      
                      {/* Code Block with Scrollbar */}
                      <pre className="p-6 pt-14 text-sm bg-slate-900 text-slate-100 overflow-x-auto overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
                        <code>{selectedItem.previewData.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Gallery Preview */}
                  {selectedItem.previewType === "gallery" && selectedItem.previewData.images && (
                    <div className="grid grid-cols-3 gap-3 p-4">
                      {selectedItem.previewData.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Tools */}
                {selectedItem.tools && (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tools Used</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
