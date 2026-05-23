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
      "ja": "Cat.1bis セルラー",
      "ko": "Cat.1bis 셀룰러"
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
    "id": "NT26-FCN",
    "line": "Cat.1 bis",
    "name": "NT26-FCN",
    "color": "#3b82f6",
    "i18n": {
      "zh": {
        "fullName": "NT26-FCN",
        "subtitle": "Cat.1bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT26-FCN",
        "subtitle": "Cat.1bis Cellular Module"
      },
      "ja": {
        "fullName": "NT26-FCN",
        "subtitle": "Cat.1bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT26-FCN",
        "subtitle": "Cat.1bis 셀룰러 모듈"
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
            "subtitle": "Cat.1bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1bis",
            "description": "NT26-FCN C是利尔达推出的高性能 Cat.1bis 蜂窝通信模组，支持 LTE Cat.1bis 网络，适用于物联网、智能硬件、工业控制等多种应用场景。",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-FCN C Series",
            "subtitle": "Cat.1bis Cellular Module",
            "badge": "📡 Cellular · Cat.1bis",
            "description": "NT26-FCN C is a high-performance Cat.1bis cellular module from Lierda.",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-FCN Cシリーズ",
            "subtitle": "Cat.1bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1bis",
            "description": "NT26-FCN CはLierdaの高性能Cat.1bisセルラーモジュールです。",
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-FCN C 시리즈",
            "subtitle": "Cat.1bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1bis",
            "description": "NT26-FCN C은 Lierda의 고성능 Cat.1bis 셀룰러 모듈입니다.",
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
                "name": "NT26-FCN C-烧录工具_V1.0.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/tools/NT26-FCN C-烧录工具_V1.0.0.zip"
              },
              {
                "name": "NT26-FCN C-调试工具_V1.0.0",
                "type": "zip",
                "size": "11B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/tools/NT26-FCN C-调试工具_V1.0.0.zip"
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
  },
  {
    "id": "NT26-KCN",
    "line": "Cat.1 bis",
    "name": "NT26-KCN",
    "color": "#2563eb",
    "i18n": {
      "zh": {
        "fullName": "NT26-KCN",
        "subtitle": "Cat.1bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT26-KCN",
        "subtitle": "Cat.1bis Cellular Module"
      },
      "ja": {
        "fullName": "NT26-KCN",
        "subtitle": "Cat.1bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT26-KCN",
        "subtitle": "Cat.1bis 셀룰러 모듈"
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
            "subtitle": "通用型 Cat.1bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1bis",
            "description": "基于移芯EC716平台的LTE Cat.1工业化模组，支持FDD-LTE/TDD-LTE通讯及Wi-Fi SCAN室内定位，适用于POC、共享设备、POS、DTU、网关等场景。",
            "highlights": [
              { "icon": "cpu", "label": "芯片平台", "value": "移芯EC716" },
              { "icon": "grid", "label": "封装形式", "value": "LCC+LGA" },
              { "icon": "signal", "label": "通信模式", "value": "FDD/TDD-LTE" },
              { "icon": "pin", "label": "室内定位", "value": "Wi-Fi SCAN" },
              { "icon": "plug", "label": "扩展接口", "value": "UART/ADC/I2C/USB等" },
              { "icon": "gauge", "label": "下行/上行", "value": "10/5 Mbps" },
              { "icon": "layers", "label": "工艺", "value": "镭雕工艺" },
              { "icon": "globe", "label": "适用场景", "value": "POC/共享/POS/DTU/网关" }
            ],
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN B Series",
            "subtitle": "General Cat.1bis Module",
            "badge": "📡 Cellular · Cat.1bis",
            "description": "LTE Cat.1 industrial module based on EC716 platform, supporting FDD/TDD-LTE and Wi-Fi SCAN indoor positioning for IoT applications.",
            "highlights": [
              { "icon": "cpu", "label": "Platform", "value": "EC716" },
              { "icon": "grid", "label": "Package", "value": "LCC+LGA" },
              { "icon": "signal", "label": "Network", "value": "FDD/TDD-LTE" },
              { "icon": "pin", "label": "Positioning", "value": "Wi-Fi SCAN" },
              { "icon": "plug", "label": "Interfaces", "value": "UART/ADC/I2C/USB etc." },
              { "icon": "gauge", "label": "DL/UL Speed", "value": "10/5 Mbps" },
              { "icon": "layers", "label": "Process", "value": "Laser Engraving" },
              { "icon": "globe", "label": "Applications", "value": "POC/Shared/POS/DTU/GW" }
            ],
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Bシリーズ",
            "subtitle": "汎用Cat.1bisモジュール",
            "badge": "📡 セルラー通信 · Cat.1bis",
            "description": "EC716プラットフォームベースのLTE Cat.1産業用モジュール。FDD/TDD-LTE通信とWi-Fi SCAN屋内測位に対応。",
            "highlights": [
              { "icon": "cpu", "label": "プラットフォーム", "value": "EC716" },
              { "icon": "grid", "label": "パッケージ", "value": "LCC+LGA" },
              { "icon": "signal", "label": "通信方式", "value": "FDD/TDD-LTE" },
              { "icon": "pin", "label": "屋内測位", "value": "Wi-Fi SCAN" },
              { "icon": "plug", "label": "インターフェース", "value": "UART/ADC/I2C/USB等" },
              { "icon": "gauge", "label": "下り/上り", "value": "10/5 Mbps" },
              { "icon": "layers", "label": "プロセス", "value": "レーザー彫刻" },
              { "icon": "globe", "label": "用途", "value": "POC/共有/POS/DTU/GW" }
            ],
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN B 시리즈",
            "subtitle": "범용 Cat.1bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1bis",
            "description": "EC716 플랫폼 기반 LTE Cat.1 산업용 모듈, FDD/TDD-LTE 통신 및 Wi-Fi SCAN 실내 위치 측위 지원.",
            "highlights": [
              { "icon": "cpu", "label": "플랫폼", "value": "EC716" },
              { "icon": "grid", "label": "패키지", "value": "LCC+LGA" },
              { "icon": "signal", "label": "통신 방식", "value": "FDD/TDD-LTE" },
              { "icon": "pin", "label": "실내 측위", "value": "Wi-Fi SCAN" },
              { "icon": "plug", "label": "인터페이스", "value": "UART/ADC/I2C/USB 등" },
              { "icon": "gauge", "label": "DL/UL 속도", "value": "10/5 Mbps" },
              { "icon": "layers", "label": "공정", "value": "레이저 조각" },
              { "icon": "globe", "label": "적용 분야", "value": "POC/공유/POS/DTU/GW" }
            ],
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
        "id": "D系列",
        "name": "NT26-KCN D",
        "models": [
          "NT26-KCN D01",
          "NT26-KCN D02"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-KCN D系列",
            "subtitle": "低功耗 Cat.1bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1bis · 低功耗",
            "description": "NT26-KCN D是利尔达推出的低功耗 Cat.1bis 蜂窝通信模组，针对电池供电场景优化，适用于智能表计、资产追踪等应用。",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN D Series",
            "subtitle": "Low-Power Cat.1bis Module",
            "badge": "📡 Cellular · Cat.1bis · Low Power",
            "description": "NT26-KCN D is a low-power Cat.1bis module optimized for battery-powered scenarios.",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Dシリーズ",
            "subtitle": "低消費電力Cat.1bisモジュール",
            "badge": "📡 セルラー通信 · Cat.1bis · 低消費電力",
            "description": "NT26-KCN Dは電池駆動向けに最適化された低消費電力Cat.1bisモジュールです。",
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN D 시리즈",
            "subtitle": "저전력 Cat.1bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1bis · 저전력",
            "description": "NT26-KCN D는 배터리 구동 시나리오에 최적화된 저전력 Cat.1bis 모듈입니다.",
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
                "name": "NT26-KCN D-Datasheet_Rev1.0",
                "type": "pdf",
                "size": "16B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/D系列/hardware/NT26-KCN D-Datasheet_Rev1.0.pdf"
              },
              {
                "name": "NT26-KCN D-硬件设计手册_Rev1.0",
                "type": "pdf",
                "size": "16B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/D系列/hardware/NT26-KCN D-硬件设计手册_Rev1.0.pdf"
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
                "name": "EPAT_V1.3.291.627",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/EPAT_V1.3.291.627.zip"
              },
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
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/FotaToolkit_V3.6.2.0.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Log Tool"
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
      },
      {
        "id": "E系列",
        "name": "NT26-KCN E",
        "models": [
          "NT26-KCN E01",
          "NT26-KCN E02"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-KCN E系列",
            "subtitle": "工业级 Cat.1bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1bis · 工业级",
            "description": "NT26-KCN E是利尔达推出的工业级 Cat.1bis 蜂窝通信模组，宽温设计，适用于工业控制、能源管理等严苛环境。",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN E Series",
            "subtitle": "Industrial Cat.1bis Module",
            "badge": "📡 Cellular · Cat.1bis · Industrial",
            "description": "NT26-KCN E is an industrial-grade Cat.1bis module with wide temperature range for harsh environments.",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Eシリーズ",
            "subtitle": "産業用Cat.1bisモジュール",
            "badge": "📡 セルラー通信 · Cat.1bis · 産業用",
            "description": "NT26-KCN Eは広温度範囲対応の産業用Cat.1bisモジュールです。",
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN E 시리즈",
            "subtitle": "산업용 Cat.1bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1bis · 산업용",
            "description": "NT26-KCN E는 광온도 범위를 지원하는 산업용 Cat.1bis 모듈입니다.",
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
                "name": "NT26-KCN E-Datasheet_Rev1.0",
                "type": "pdf",
                "size": "16B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/E系列/hardware/NT26-KCN E-Datasheet_Rev1.0.pdf"
              },
              {
                "name": "NT26-KCN E-硬件设计手册_Rev1.0",
                "type": "pdf",
                "size": "16B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/E系列/hardware/NT26-KCN E-硬件设计手册_Rev1.0.pdf"
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
                "name": "EPAT_V1.3.291.627",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/EPAT_V1.3.291.627.zip"
              },
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
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/FotaToolkit_V3.6.2.0.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Log Tool"
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
            "subtitle": "车规级 Cat.1bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1bis · 车规级",
            "description": "NT26-KCN F是利尔达推出的车规级 Cat.1bis 蜂窝通信模组，通过车规认证，适用于车载T-Box、车联网等场景。",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN F Series",
            "subtitle": "Automotive Cat.1bis Module",
            "badge": "📡 Cellular · Cat.1bis · Automotive",
            "description": "NT26-KCN F is an automotive-grade Cat.1bis module certified for vehicle applications.",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Fシリーズ",
            "subtitle": "車載用Cat.1bisモジュール",
            "badge": "📡 セルラー通信 · Cat.1bis · 車載用",
            "description": "NT26-KCN Fは車載認証取得のCat.1bisモジュールです。",
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN F 시리즈",
            "subtitle": "차량용 Cat.1bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1bis · 차량용",
            "description": "NT26-KCN F는 차량 인증을 취득한 Cat.1bis 모듈입니다.",
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
                "name": "NT26-KCN F-Datasheet_Rev1.0",
                "type": "pdf",
                "size": "16B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/F系列/hardware/NT26-KCN F-Datasheet_Rev1.0.pdf"
              },
              {
                "name": "NT26-KCN F-硬件设计手册_Rev1.0",
                "type": "pdf",
                "size": "16B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/F系列/hardware/NT26-KCN F-硬件设计手册_Rev1.0.pdf"
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
                "name": "EPAT_V1.3.291.627",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/EPAT_V1.3.291.627.zip"
              },
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
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/FotaToolkit_V3.6.2.0.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Log Tool"
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
      },
      {
        "id": "G系列",
        "name": "NT26-KCN G",
        "models": [
          "NT26-KCN G01"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-KCN G系列",
            "subtitle": "高集成 Cat.1bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1bis · 高集成",
            "description": "NT26-KCN G是利尔达推出的高集成度 Cat.1bis 蜂窝通信模组，内置 GNSS 定位，适用于共享设备、物流追踪等场景。",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN G Series",
            "subtitle": "Integrated Cat.1bis Module",
            "badge": "📡 Cellular · Cat.1bis · Integrated",
            "description": "NT26-KCN G is a highly integrated Cat.1bis module with built-in GNSS for tracking applications.",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Gシリーズ",
            "subtitle": "高集積Cat.1bisモジュール",
            "badge": "📡 セルラー通信 · Cat.1bis · 高集積",
            "description": "NT26-KCN GはGNSS内蔵の高集積Cat.1bisモジュールです。",
            "status": "完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN G 시리즈",
            "subtitle": "고집적 Cat.1bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1bis · 고집적",
            "description": "NT26-KCN G는 GNSS 내장 고집적 Cat.1bis 모듈입니다.",
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
                "name": "NT26-KCN G-Datasheet_Rev1.0",
                "type": "pdf",
                "size": "16B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/G系列/hardware/NT26-KCN G-Datasheet_Rev1.0.pdf"
              },
              {
                "name": "NT26-KCN G-硬件设计手册_Rev1.0",
                "type": "pdf",
                "size": "16B",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/G系列/hardware/NT26-KCN G-硬件设计手册_Rev1.0.pdf"
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
                "name": "EPAT_V1.3.291.627",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/EPAT_V1.3.291.627.zip"
              },
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
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/FotaToolkit_V3.6.2.0.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/NT26-KCN/B系列/tools/Log Tool"
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
  }
];

function getLocalizedName(obj) {
  if (typeof obj === "string") return obj;
  return obj[currentLang] || obj.zh || obj.en || "";
}
