const SITE_CONFIG = {
  "repo": "zack3812/lierda-iot-lierda-docs",
  "baseRepo": "https://github.com/zack3812/lierda-iot-lierda-docs",
  "r2PublicUrl": "https://pub-03c73643e8b947b6b1bb6b32f808417f.r2.dev",
  "videos": [
    {
      "id": "company",
      "r2Key": "assets/videos/260224英文版宣传片(公司).mp4"
    },
    {
      "id": "factory",
      "r2Key": "assets/videos/工厂英文介绍（4k）.mp4"
    }
  ]
};

const LINES = [
  {
    "id": "Cat.1 bis",
    "color": "#2563eb",
    "i18n": {
      "zh": "Cat.1 bis 蜂窝通信",
      "en": "Cat.1 bis Cellular",
      "ja": "Cat.1 bis セルラー",
      "ko": "Cat.1 bis 셀룰러"
    },
    "products": [
      "NT26-KCN",
      "NT26-FCN"
    ]
  },
  {
    "id": "NB-IOT",
    "color": "#059669",
    "i18n": {
      "zh": "NB-IoT 低功耗广域",
      "en": "NB-IoT LPWAN",
      "ja": "NB-IoT LPWAN",
      "ko": "NB-IoT LPWAN"
    },
    "products": []
  },
  {
    "id": "5G",
    "color": "#dc2626",
    "i18n": {
      "zh": "5G 高速通信",
      "en": "5G High-Speed",
      "ja": "5G 高速通信",
      "ko": "5G 고속 통신"
    },
    "products": []
  },
  {
    "id": "LoRaWAN模组",
    "color": "#7c3aed",
    "i18n": {
      "zh": "LoRaWAN 模组",
      "en": "LoRaWAN Modules",
      "ja": "LoRaWAN モジュール",
      "ko": "LoRaWAN 모듈"
    },
    "products": []
  },
  {
    "id": "LoRaWAN网关",
    "color": "#9333ea",
    "i18n": {
      "zh": "LoRaWAN 网关",
      "en": "LoRaWAN Gateways",
      "ja": "LoRaWAN ゲートウェイ",
      "ko": "LoRaWAN 게이트웨이"
    },
    "products": []
  },
  {
    "id": "LoRa SPI",
    "color": "#a855f7",
    "i18n": {
      "zh": "LoRa SPI 透传",
      "en": "LoRa SPI Transparent",
      "ja": "LoRa SPI 透過",
      "ko": "LoRa SPI 투명전송"
    },
    "products": []
  },
  {
    "id": "LoRa自组网",
    "color": "#c026d3",
    "i18n": {
      "zh": "LoRa 自组网",
      "en": "LoRa Mesh",
      "ja": "LoRa メッシュ",
      "ko": "LoRa 메쉬"
    },
    "products": []
  },
  {
    "id": "IOT Wi-Fi",
    "color": "#0891b2",
    "i18n": {
      "zh": "IoT Wi-Fi",
      "en": "IoT Wi-Fi",
      "ja": "IoT Wi-Fi",
      "ko": "IoT Wi-Fi"
    },
    "products": []
  },
  {
    "id": "标准Wi-Fi",
    "color": "#0284c7",
    "i18n": {
      "zh": "标准 Wi-Fi",
      "en": "Standard Wi-Fi",
      "ja": "標準 Wi-Fi",
      "ko": "표준 Wi-Fi"
    },
    "products": []
  },
  {
    "id": "蓝牙",
    "color": "#2563eb",
    "i18n": {
      "zh": "蓝牙模组",
      "en": "Bluetooth Modules",
      "ja": "Bluetooth モジュール",
      "ko": "블루투스 모듈"
    },
    "products": []
  },
  {
    "id": "星闪",
    "color": "#f59e0b",
    "i18n": {
      "zh": "星闪模组",
      "en": "SparkLink Modules",
      "ja": "SparkLink モジュール",
      "ko": "SparkLink 모듈"
    },
    "products": []
  },
  {
    "id": "嵌入式工控",
    "color": "#475569",
    "i18n": {
      "zh": "嵌入式工控",
      "en": "Embedded Industrial",
      "ja": "組込み産業制御",
      "ko": "임베디드 산업제어"
    },
    "products": []
  },
  {
    "id": "嵌入式终端",
    "color": "#64748b",
    "i18n": {
      "zh": "嵌入式终端",
      "en": "Embedded Terminal",
      "ja": "組込み端末",
      "ko": "임베디드 단말"
    },
    "products": []
  }
];

const PRODUCTS = [
  {
    "id": "NT26-KCN",
    "line": "Cat.1 bis",
    "name": "NT26-KCN",
    "color": "#2563eb",
    "i18n": {
      "zh": {
        "fullName": "NT26-KCN",
        "subtitle": "Cat.1 bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT26-KCN",
        "subtitle": "Cat.1 bis Cellular Module"
      },
      "ja": {
        "fullName": "NT26-KCN",
        "subtitle": "Cat.1 bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT26-KCN",
        "subtitle": "Cat.1 bis 셀룰러 모듈"
      }
    },
    "variants": [
      {
        "id": "B系列",
        "name": "NT26-KCN B",
        "models": [
          "NT26K0B1",
          "NT26K2B1",
          "NT26K2B1-0S",
          "NT26K0B1-M",
          "NT26K0B3",
          "NT26K0B3-0S",
          "NT26K0B3-M",
          "NT26K2B3",
          "NT26K2B3-0S",
          "NT26K2B1-0S-VN"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-KCN B系列",
            "subtitle": "标准透传 Cat.1 bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 标准透传",
            "description": "基于移芯EC716平台的LTE Cat.1工业化模组，支持FDD-LTE/TDD-LTE通讯及Wi-Fi SCAN室内定位，适用于POC、共享设备、POS、DTU、网关等场景。",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN B Series",
            "subtitle": "General Cat.1 bis Module",
            "badge": "📡 Cellular · Cat.1 bis · Standard Transparent",
            "description": "LTE Cat.1 industrial module based on EC716 platform, supporting FDD/TDD-LTE and Wi-Fi SCAN indoor positioning for IoT applications.",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Bシリーズ",
            "subtitle": "標準透過Cat.1 bisモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 標準透過",
            "description": "EC716プラットフォームベースのLTE Cat.1産業用モジュール。FDD/TDD-LTE通信とWi-Fi SCAN屋内測位に対応。",
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN B 시리즈",
            "subtitle": "표준 투과 Cat.1 bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 표준 투과",
            "description": "EC716 플랫폼 기반 LTE Cat.1 산업용 모듈, FDD/TDD-LTE 통신 및 Wi-Fi SCAN 실내 위치 측위 지원.",
            "status": "완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-KCN-B 3D Model_V03",
                "type": "step",
                "size": "1.8MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/hardware/Lierda NT26-KCN-B 3D Model_V03.step"
              },
              {
                "name": "Lierda NT26-KCN-B Series Footprint Rev3.0",
                "type": "zip",
                "size": "1.7MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/hardware/Lierda NT26-KCN-B Series Footprint Rev3.0.zip"
              },
              {
                "name": "Lierda NT26-KCN-B Series Hardware Design Manual_Rev3.3",
                "type": "pdf",
                "size": "3.5MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/hardware/Lierda NT26-KCN-B Series Hardware Design Manual_Rev3.3.pdf"
              },
              {
                "name": "Lierda NT26-KCN-B(VN) Hardware Design Manual Rev2.0",
                "type": "pdf",
                "size": "3.5MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/hardware/Lierda NT26-KCN-B(VN) Hardware Design Manual Rev2.0.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "software",
            "icon": "code",
            "files": [
              {
                "name": "Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14",
                "type": "pdf",
                "size": "4.6MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": false
          },
          {
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "Lierda Science & Technology Group Co.,Ltd_NT26-KCN",
                "type": "pdf",
                "size": "277.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/Lierda Science & Technology Group Co.,Ltd_NT26-KCN.PDF"
              },
              {
                "name": "NT26-KCN CCC Certificate",
                "type": "pdf",
                "size": "1.6MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26-KCN CCC Certificate.pdf"
              },
              {
                "name": "NT26-KCN CCC Report",
                "type": "zip",
                "size": "3.7MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26-KCN CCC Report.zip"
              },
              {
                "name": "NT26-KCN RoHS Report",
                "type": "pdf",
                "size": "1.2MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26-KCN RoHS Report.pdf"
              },
              {
                "name": "NT26-KCN SRRC Certificate",
                "type": "pdf",
                "size": "3.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26-KCN SRRC Certificate.pdf"
              },
              {
                "name": "NT26‑KCN NAL Certificate",
                "type": "pdf",
                "size": "881.7KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26‑KCN NAL Certificate.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "evb",
            "icon": "board",
            "files": [
              {
                "name": "Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0",
                "type": "pdf",
                "size": "2.3MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": false
          }
        ]
      },
      {
        "id": "F系列",
        "name": "NT26-KCN F",
        "models": [
          "NT26-KCN F01"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-KCN F系列",
            "subtitle": "小容量多媒体 Cat.1 bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 小容量多媒体",
            "description": "基于移芯EC716平台的LTE Cat.1工业化模组，支持FDD-LTE/TDD-LTE通讯及Wi-Fi SCAN室内定位，适用于云喇叭等场景。",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN F Series",
            "subtitle": "Small-Capacity Multimedia Cat.1 bis Module",
            "badge": "📡 Cellular · Cat.1 bis · Small-Capacity Multimedia",
            "description": "LTE Cat.1 industrial module based on EC716 platform, supporting FDD-LTE/TDD-LTE and Wi-Fi SCAN indoor positioning, suitable for cloud speakers and other scenarios.",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Fシリーズ",
            "subtitle": "小容量マルチメディアCat.1 bisモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 小容量マルチメディア",
            "description": "EC716プラットフォームベースのLTE Cat.1産業用モジュール。FDD/TDD-LTE通信とWi-Fi SCAN屋内測位に対応。クラウドスピーカーなどの用途に適しています。",
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN F 시리즈",
            "subtitle": "소용량 멀티미디어 Cat.1 bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 소용량 멀티미디어",
            "description": "EC716 플랫폼 기반 LTE Cat.1 산업용 모듈, FDD/TDD-LTE 통신 및 Wi-Fi SCAN 실내 위치 측위 지원. 클라우드 스피커 등의 응용에 적합합니다.",
            "status": "완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-KCN-F 3D Model",
                "type": "step",
                "size": "2.3MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-KCN/F系列/hardware/Lierda NT26-KCN-F 3D Model.step"
              },
              {
                "name": "Lierda NT26-KCN-F Series Footprint_Rev1.0",
                "type": "zip",
                "size": "658.2KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-KCN/F系列/hardware/Lierda NT26-KCN-F Series Footprint_Rev1.0.zip"
              },
              {
                "name": "Lierda NT26-KCN-F Series Hardware Design Manual_Rev1.5",
                "type": "pdf",
                "size": "2.9MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-KCN/F系列/hardware/Lierda NT26-KCN-F Series Hardware Design Manual_Rev1.5.pdf"
              },
              {
                "name": "Lierda NT26-KCN-F(KR) Hardware Design Manual_Rev1.4",
                "type": "pdf",
                "size": "2.9MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-KCN/F系列/hardware/Lierda NT26-KCN-F(KR) Hardware Design Manual_Rev1.4.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "software",
            "icon": "code",
            "files": [
              {
                "name": "Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14",
                "type": "pdf",
                "size": "4.6MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              }
            ],
            "shared": true,
            "sharedFrom": "B系列"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "B系列"
          },
          {
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "Lierda Science & Technology Group Co.,Ltd_NT26-KCN",
                "type": "pdf",
                "size": "277.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/Lierda Science & Technology Group Co.,Ltd_NT26-KCN.PDF"
              },
              {
                "name": "NT26-KCN CCC Certificate",
                "type": "pdf",
                "size": "1.6MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26-KCN CCC Certificate.pdf"
              },
              {
                "name": "NT26-KCN CCC Report",
                "type": "zip",
                "size": "3.7MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26-KCN CCC Report.zip"
              },
              {
                "name": "NT26-KCN RoHS Report",
                "type": "pdf",
                "size": "1.2MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26-KCN RoHS Report.pdf"
              },
              {
                "name": "NT26-KCN SRRC Certificate",
                "type": "pdf",
                "size": "3.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26-KCN SRRC Certificate.pdf"
              },
              {
                "name": "NT26‑KCN NAL Certificate",
                "type": "pdf",
                "size": "881.7KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/certification/NT26‑KCN NAL Certificate.pdf"
              }
            ],
            "shared": true,
            "sharedFrom": "B系列"
          },
          {
            "id": "evb",
            "icon": "board",
            "files": [
              {
                "name": "Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0",
                "type": "pdf",
                "size": "2.3MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "B系列"
          }
        ]
      }
    ]
  },
  {
    "id": "NT26-FCN",
    "line": "Cat.1 bis",
    "name": "NT26-FCN",
    "color": "#3b82f6",
    "i18n": {
      "zh": {
        "fullName": "NT26-FCN",
        "subtitle": "Cat.1 bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT26-FCN",
        "subtitle": "Cat.1 bis Cellular Module"
      },
      "ja": {
        "fullName": "NT26-FCN",
        "subtitle": "Cat.1 bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT26-FCN",
        "subtitle": "Cat.1 bis 셀룰러 모듈"
      }
    },
    "variants": [
      {
        "id": "C系列",
        "name": "NT26-FCN C",
        "models": [
          "NT26-FCN C01",
          "NT26-FCN C02",
          "NT26-FCN C03"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-FCN C系列",
            "subtitle": "Cat.1 bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis",
            "description": "NT26-FCN C是利尔达推出的高性能 Cat.1 bis 蜂窝通信模组，支持 LTE Cat.1 bis 网络，适用于物联网、智能硬件、工业控制等多种应用场景。",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-FCN C Series",
            "subtitle": "Cat.1 bis Cellular Module",
            "badge": "📡 Cellular · Cat.1 bis",
            "description": "NT26-FCN C is a high-performance Cat.1 bis cellular module from Lierda.",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-FCN Cシリーズ",
            "subtitle": "Cat.1 bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis",
            "description": "NT26-FCN CはLierdaの高性能Cat.1 bisセルラーモジュールです。",
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-FCN C 시리즈",
            "subtitle": "Cat.1 bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis",
            "description": "NT26-FCN C은 Lierda의 고성능 Cat.1 bis 셀룰러 모듈입니다.",
            "status": "완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "NT26-FCN C-Datasheet_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/hardware/NT26-FCN C-Datasheet_Rev1.0.pdf"
              },
              {
                "name": "NT26-FCN C-PCB封装库_Rev1.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/hardware/NT26-FCN C-PCB封装库_Rev1.0.zip"
              },
              {
                "name": "NT26-FCN C-原理图参考设计_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/hardware/NT26-FCN C-原理图参考设计_Rev1.0.pdf"
              },
              {
                "name": "NT26-FCN C-射频设计指南_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/hardware/NT26-FCN C-射频设计指南_Rev1.0.pdf"
              },
              {
                "name": "NT26-FCN C-硬件设计手册_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/hardware/NT26-FCN C-硬件设计手册_Rev1.0.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "software",
            "icon": "code",
            "files": [
              {
                "name": "NT26-FCN C-AT指令集_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/software/NT26-FCN C-AT指令集_Rev1.0.pdf"
              },
              {
                "name": "NT26-FCN C-SDK_V1.0.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/software/NT26-FCN C-SDK_V1.0.0.zip"
              },
              {
                "name": "NT26-FCN C-固件升级工具_V1.0.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/software/NT26-FCN C-固件升级工具_V1.0.0.zip"
              },
              {
                "name": "NT26-FCN C-示例代码库_V1.0.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/software/NT26-FCN C-示例代码库_V1.0.0.zip"
              },
              {
                "name": "NT26-FCN C-软件开发指南_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/software/NT26-FCN C-软件开发指南_Rev1.0.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "NT26-FCN C-串口调试助手_V3.5.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/tools/NT26-FCN C-串口调试助手_V3.5.0.zip"
              },
              {
                "name": "NT26-FCN C-调试工具_V1.0.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/tools/NT26-FCN C-调试工具_V1.0.0.zip"
              },
              {
                "name": "NT26-FCN C-烧录工具_V1.0.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/tools/NT26-FCN C-烧录工具_V1.0.0.zip"
              }
            ],
            "shared": false
          },
          {
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "NT26-FCN C-环保报告_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/certification/NT26-FCN C-环保报告_Rev1.0.pdf"
              },
              {
                "name": "NT26-FCN C-认证证书合集_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/certification/NT26-FCN C-认证证书合集_Rev1.0.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "evb",
            "icon": "board",
            "files": [
              {
                "name": "NT26-FCN C-EVB-BOM清单_Rev1.0",
                "type": "xlsx",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/evb/NT26-FCN C-EVB-BOM清单_Rev1.0.xlsx"
              },
              {
                "name": "NT26-FCN C-EVB原理图_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/evb/NT26-FCN C-EVB原理图_Rev1.0.pdf"
              },
              {
                "name": "NT26-FCN C-EVB开发板使用手册_Rev1.0",
                "type": "pdf",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/evb/NT26-FCN C-EVB开发板使用手册_Rev1.0.pdf"
              }
            ],
            "shared": false
          }
        ]
      }
    ]
  }
];

function getLocalizedName(obj) {
  if (typeof obj === "string") return obj;
  return obj[currentLang] || obj.zh || obj.en || "";
}
