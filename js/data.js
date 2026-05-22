const SITE_CONFIG = {
  repo: "zack3812/lierda-iot-lierda-docs",
  baseRepo: "https://github.com/zack3812/lierda-iot-lierda-docs",
  r2PublicUrl: "https://pub-03c73643e8b947b6b1bb6b32f808417f.r2.dev"
};

const PRODUCTS = [
  {
    id: "b00",
    name: "B00",
    color: "#2563eb",
    i18n: {
      zh: { fullName: "B00系列", subtitle: "Cat.1bis 蜂窝通信模组", badge: "📡 蜂窝通信 · Cat.1bis", description: "B00是利尔达推出的高性能、低功耗 Cat.1bis 模组，采用国产芯片平台，支持 LTE Cat.1bis 网络，适用于物联网、智能硬件、工业控制等多种应用场景。", status: "完整", readingOrder: "Datasheet → 硬件设计 → AT指令 → EVB资料" },
      en: { fullName: "B00 Series", subtitle: "Cat.1bis Cellular Module", badge: "📡 Cellular · Cat.1bis", description: "B00 is a high-performance, low-power Cat.1bis module from Lierda, featuring a domestic chipset platform with LTE Cat.1bis network support, ideal for IoT, smart devices, and industrial control.", status: "Complete", readingOrder: "Datasheet → Hardware Design → AT Commands → EVB Docs" },
      ja: { fullName: "B00シリーズ", subtitle: "Cat.1bis セルラーモジュール", badge: "📡 セルラー通信 · Cat.1bis", description: "B00はLierdaの高性能・低消費電力Cat.1bisモジュールです。国産チッププラットフォームを採用し、LTE Cat.1bisネットワークに対応。IoT、スマートデバイス、産業制御などに最適です。", status: "完備", readingOrder: "Datasheet → ハードウェア設計 → ATコマンド → EVB資料" },
      ko: { fullName: "B00 시리즈", subtitle: "Cat.1bis 셀룰러 모듈", badge: "📡 셀룰러 통신 · Cat.1bis", description: "B00은 Lierda의 고성능 저전력 Cat.1bis 모듈로, 국산 칩셋 플랫폼을 채택하고 LTE Cat.1bis 네트워크를 지원하며 IoT, 스마트 기기, 산업 제어 등에 적합합니다.", status: "완비", readingOrder: "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료" }
    },
    categories: [
      {
        id: "hardware", icon: "cpu",
        files: [
          { name: { zh: "B00 硬件设计手册_Rev1.0", en: "B00 Hardware Design Guide_Rev1.0", ja: "B00 ハードウェア設計マニュアル_Rev1.0", ko: "B00 하드웨어 설계 매뉴얼_Rev1.0" }, type: "pdf", size: "10.2MB", date: "2026-05-01", r2Key: "b00/hardware/B00-硬件设计手册_Rev1.0.pdf" },
          { name: { zh: "B00 数据手册 Datasheet_Rev1.0", en: "B00 Datasheet_Rev1.0", ja: "B00 データシート_Rev1.0", ko: "B00 데이터시트_Rev1.0" }, type: "pdf", size: "1.5MB", date: "2026-04-25", r2Key: "b00/hardware/B00-Datasheet_Rev1.0.pdf" },
          { name: { zh: "B00 原理图参考设计_Rev1.0", en: "B00 Reference Schematic_Rev1.0", ja: "B00 リファレンス回路図_Rev1.0", ko: "B00 참조 회로도_Rev1.0" }, type: "pdf", size: "2.1MB", date: "2026-04-20", r2Key: "b00/hardware/B00-原理图参考设计_Rev1.0.pdf" },
          { name: { zh: "B00 PCB封装库_Rev1.0", en: "B00 PCB Footprint Library_Rev1.0", ja: "B00 PCBフットプリントライブラリ_Rev1.0", ko: "B00 PCB 패턴 라이브러리_Rev1.0" }, type: "zip", size: "0.6MB", date: "2026-04-15", r2Key: "b00/hardware/B00-PCB封装库_Rev1.0.zip" },
          { name: { zh: "B00 射频设计指南_Rev1.0", en: "B00 RF Design Guide_Rev1.0", ja: "B00 RF設計ガイド_Rev1.0", ko: "B00 RF 설계 가이드_Rev1.0" }, type: "pdf", size: "3.2MB", date: "2026-04-10", r2Key: "b00/hardware/B00-射频设计指南_Rev1.0.pdf" }
        ]
      },
      {
        id: "software", icon: "code",
        files: [
          { name: { zh: "B00 SDK_V1.0.0", en: "B00 SDK_V1.0.0", ja: "B00 SDK_V1.0.0", ko: "B00 SDK_V1.0.0" }, type: "zip", size: "95.8MB", date: "2026-05-05", r2Key: "b00/software/B00-SDK_V1.0.0.zip" },
          { name: { zh: "B00 AT指令集_Rev1.0", en: "B00 AT Command Set_Rev1.0", ja: "B00 ATコマンドセット_Rev1.0", ko: "B00 AT 명령어 세트_Rev1.0" }, type: "pdf", size: "3.8MB", date: "2026-04-30", r2Key: "b00/software/B00-AT指令集_Rev1.0.pdf" },
          { name: { zh: "B00 软件开发指南_Rev1.0", en: "B00 Software Development Guide_Rev1.0", ja: "B00 ソフトウェア開発ガイド_Rev1.0", ko: "B00 소프트웨어 개발 가이드_Rev1.0" }, type: "pdf", size: "7.5MB", date: "2026-04-25", r2Key: "b00/software/B00-软件开发指南_Rev1.0.pdf" },
          { name: { zh: "B00 固件升级工具_V1.0.0", en: "B00 Firmware Upgrade Tool_V1.0.0", ja: "B00 ファームウェアアップグレードツール_V1.0.0", ko: "B00 펌웨어 업그레이드 도구_V1.0.0" }, type: "zip", size: "12.6MB", date: "2026-04-20", r2Key: "b00/software/B00-固件升级工具_V1.0.0.zip" },
          { name: { zh: "B00 示例代码库_V1.0.0", en: "B00 Sample Code_V1.0.0", ja: "B00 サンプルコード_V1.0.0", ko: "B00 샘플 코드_V1.0.0" }, type: "zip", size: "18.9MB", date: "2026-04-15", r2Key: "b00/software/B00-示例代码库_V1.0.0.zip" }
        ]
      },
      {
        id: "tools", icon: "wrench",
        files: [
          { name: { zh: "B00 烧录工具_V1.0.0", en: "B00 Flashing Tool_V1.0.0", ja: "B00 書き込みツール_V1.0.0", ko: "B00 플래싱 도구_V1.0.0" }, type: "zip", size: "8.5MB", date: "2026-05-01", r2Key: "b00/tools/B00-烧录工具_V1.0.0.zip" },
          { name: { zh: "B00 调试工具_V1.0.0", en: "B00 Debug Tool_V1.0.0", ja: "B00 デバッグツール_V1.0.0", ko: "B00 디버그 도구_V1.0.0" }, type: "zip", size: "10.8MB", date: "2026-04-28", r2Key: "b00/tools/B00-调试工具_V1.0.0.zip" },
          { name: { zh: "串口调试助手_V3.5.0", en: "Serial Debug Assistant_V3.5.0", ja: "シリアルデバッグアシスタント_V3.5.0", ko: "시리얼 디버그 어시스턴트_V3.5.0" }, type: "zip", size: "3.2MB", date: "2026-03-05", r2Key: "b00/tools/串口调试助手_V3.5.0.zip" }
        ]
      },
      {
        id: "certification", icon: "shield",
        files: [
          { name: { zh: "B00 认证证书合集_Rev1.0", en: "B00 Certification Collection_Rev1.0", ja: "B00 認証証明書コレクション_Rev1.0", ko: "B00 인증서 컬렉션_Rev1.0" }, type: "pdf", size: "15.6MB", date: "2026-04-20", r2Key: "b00/certification/B00-认证证书合集_Rev1.0.pdf" },
          { name: { zh: "B00 环保报告_Rev1.0", en: "B00 Environmental Report_Rev1.0", ja: "B00 環境レポート_Rev1.0", ko: "B00 환경 보고서_Rev1.0" }, type: "pdf", size: "4.8MB", date: "2026-04-10", r2Key: "b00/certification/B00-环保报告_Rev1.0.pdf" }
        ]
      },
      {
        id: "evb", icon: "board",
        files: [
          { name: { zh: "B00-EVB 开发板使用手册_Rev1.0", en: "B00-EVB User Guide_Rev1.0", ja: "B00-EVB ユーザーガイド_Rev1.0", ko: "B00-EVB 사용 가이드_Rev1.0" }, type: "pdf", size: "4.9MB", date: "2026-04-25", r2Key: "b00/evb/B00-EVB开发板使用手册_Rev1.0.pdf" },
          { name: { zh: "B00-EVB 原理图_Rev1.0", en: "B00-EVB Schematic_Rev1.0", ja: "B00-EVB 回路図_Rev1.0", ko: "B00-EVB 회로도_Rev1.0" }, type: "pdf", size: "1.7MB", date: "2026-04-20", r2Key: "b00/evb/B00-EVB原理图_Rev1.0.pdf" },
          { name: { zh: "B00-EVB BOM清单_Rev1.0", en: "B00-EVB BOM List_Rev1.0", ja: "B00-EVB BOMリスト_Rev1.0", ko: "B00-EVB BOM 목록_Rev1.0" }, type: "xlsx", size: "0.2MB", date: "2026-04-15", r2Key: "b00/evb/B00-EVB-BOM清单_Rev1.0.xlsx" }
        ]
      }
    ]
  },
  {
    id: "c00",
    name: "C00",
    color: "#059669",
    i18n: {
      zh: { fullName: "C00系列", subtitle: "NB-IoT 低功耗通信模组", badge: "📶 蜂窝通信 · NB-IoT", description: "C00是利尔达推出的超低功耗 NB-IoT 模组，适用于智能表计、烟感、资产追踪等低功耗广域网场景。", status: "维护中", readingOrder: "Datasheet → 硬件设计 → AT指令 → EVB资料" },
      en: { fullName: "C00 Series", subtitle: "NB-IoT Low-Power Module", badge: "📶 Cellular · NB-IoT", description: "C00 is an ultra-low-power NB-IoT module from Lierda, designed for smart metering, smoke detection, and asset tracking in LPWAN scenarios.", status: "Maintaining", readingOrder: "Datasheet → Hardware Design → AT Commands → EVB Docs" },
      ja: { fullName: "C00シリーズ", subtitle: "NB-IoT 低消費電力モジュール", badge: "📶 セルラー通信 · NB-IoT", description: "C00はLierdaの超低消費電力NB-IoTモジュールです。スマートメーター、煙感知、資産追跡などのLPWANシナリオに適しています。", status: "保守中", readingOrder: "Datasheet → ハードウェア設計 → ATコマンド → EVB資料" },
      ko: { fullName: "C00 시리즈", subtitle: "NB-IoT 저전력 모듈", badge: "📶 셀룰러 통신 · NB-IoT", description: "C00은 Lierda의 초저전력 NB-IoT 모듈로, 스마트 미터링, 연기 감지, 자산 추적 등 LPWAN 시나리오에 적합합니다.", status: "유지보수 중", readingOrder: "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료" }
    },
    categories: [
      {
        id: "hardware", icon: "cpu",
        files: [
          { name: { zh: "C00 数据手册 Datasheet_Rev1.0", en: "C00 Datasheet_Rev1.0", ja: "C00 データシート_Rev1.0", ko: "C00 데이터시트_Rev1.0" }, type: "pdf", size: "1.8MB", date: "2026-03-20", r2Key: "c00/hardware/C00-Datasheet_Rev1.0.pdf" },
          { name: { zh: "C00 硬件设计手册_Rev1.0", en: "C00 Hardware Design Guide_Rev1.0", ja: "C00 ハードウェア設計マニュアル_Rev1.0", ko: "C00 하드웨어 설계 매뉴얼_Rev1.0" }, type: "pdf", size: "8.5MB", date: "2026-03-15", r2Key: "c00/hardware/C00-硬件设计手册_Rev1.0.pdf" }
        ]
      },
      {
        id: "software", icon: "code",
        files: [
          { name: { zh: "C00 AT指令集_Rev1.0", en: "C00 AT Command Set_Rev1.0", ja: "C00 ATコマンドセット_Rev1.0", ko: "C00 AT 명령어 세트_Rev1.0" }, type: "pdf", size: "3.2MB", date: "2026-03-10", r2Key: "c00/software/C00-AT指令集_Rev1.0.pdf" },
          { name: { zh: "C00 示例代码库_V1.0.0", en: "C00 Sample Code_V1.0.0", ja: "C00 サンプルコード_V1.0.0", ko: "C00 샘플 코드_V1.0.0" }, type: "zip", size: "12.5MB", date: "2026-03-05", r2Key: "c00/software/C00-示例代码库_V1.0.0.zip" }
        ]
      }
    ]
  }
];

function getLocalizedName(obj) {
  if (typeof obj === "string") return obj;
  return obj[currentLang] || obj.zh || obj.en || "";
}
