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
      "NT21-KCN",
      "NT26-KCN",
      "NT26-FCN",
      "NT26-FJP",
      "NT26-FEU",
      "NT26-FLA",
      "NT26-FNA"
    ]
  }
];

const PRODUCTS = [
  {
    "id": "NT21-KCN",
    "line": "Cat.1 bis",
    "name": "NT21-KCN",
    "color": "#335bcd",
    "i18n": {
      "zh": {
        "fullName": "NT21-KCN",
        "subtitle": "Cat.1 bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT21-KCN",
        "subtitle": "Cat.1 bis Cellular Module"
      },
      "ja": {
        "fullName": "NT21-KCN",
        "subtitle": "Cat.1 bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT21-KCN",
        "subtitle": "Cat.1 bis 셀룰러 모듈"
      }
    },
    "variants": [
      {
        "id": "A系列",
        "name": "NT21-KCN A",
        "models": [
          "NT21KCNA0MNNA"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT21-KCN A系列",
            "subtitle": "小封装 Cat.1 bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 小封装",
            "status": "更新中",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT21-KCN A Series",
            "subtitle": "Small-Form-Factor Cat.1 bis Cellular Module",
            "badge": "📡 Cellular · Cat.1 bis · Small-Form-Factor",
            "status": "In Progress",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT21-KCN Aシリーズ",
            "subtitle": "小型フォームファクター Cat.1 bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 小型フォームファクター",
            "status": "更新中",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT21-KCN A 시리즈",
            "subtitle": "소형 폼 팩터 Cat.1 bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 소형 폼 팩터",
            "status": "업데이트 중",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT21-KCN A Series Hardware Design Manual_Rev1.5",
                "type": "pdf",
                "size": "2.9MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT21-KCN/A系列/hardware/Lierda NT21-KCN A Series Hardware Design Manual_Rev1.5.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "NT21-KCN SRRC Certificate",
                "type": "pdf",
                "size": "2.9MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT21-KCN/certification/NT21-KCN SRRC Certificate.pdf"
              }
            ],
            "shared": true,
            "sharedFrom": "product"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN B Series",
            "subtitle": "Standard Transparent Cat.1 bis Module",
            "badge": "📡 Cellular · Cat.1 bis · Standard Transparent",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Bシリーズ",
            "subtitle": "標準透過通信 Cat.1 bis モジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 標準透過通信",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN B 시리즈",
            "subtitle": "표준 투명 전송 Cat.1 bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 표준 투명 전송",
            "status": "자료 완비",
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
                "date": "2026-05-24",
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
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "Lierda Science & Technology Group Co.,Ltd_NT26-KCN",
                "type": "pdf",
                "size": "277.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/Lierda Science & Technology Group Co.,Ltd_NT26-KCN.PDF"
              },
              {
                "name": "NT26-KCN CCC Certificate",
                "type": "pdf",
                "size": "1.6MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN CCC Certificate.pdf"
              },
              {
                "name": "NT26-KCN CCC Report",
                "type": "zip",
                "size": "3.7MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN CCC Report.zip"
              },
              {
                "name": "NT26-KCN RoHS Report",
                "type": "pdf",
                "size": "1.2MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN RoHS Report.pdf"
              },
              {
                "name": "NT26-KCN SRRC Certificate",
                "type": "pdf",
                "size": "3.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN SRRC Certificate.pdf"
              },
              {
                "name": "NT26‑KCN NAL Certificate",
                "type": "pdf",
                "size": "881.7KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26‑KCN NAL Certificate.pdf"
              }
            ],
            "shared": true,
            "sharedFrom": "product"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          }
        ]
      },
      {
        "id": "E系列",
        "name": "NT26-KCN E",
        "models": [
          "NT26K2E0-0G",
          "NT26K2E1-0G"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-KCN E系列",
            "subtitle": "GNSS定位 Cat.1 bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · GNSS定位",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN E Series",
            "subtitle": "GNSS Positioning Cat.1 bis Module",
            "badge": "📡 Cellular · Cat.1 bis · GNSS Positioning",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Eシリーズ",
            "subtitle": "GNSS測位 Cat.1 bis モジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · GNSS測位",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN E 시리즈",
            "subtitle": "GNSS 위치측정 Cat.1 bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · GNSS 위치측정",
            "status": "자료 완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-KCN E Series (New Version)_Hardware Design Manual_Rev1.1",
                "type": "pdf",
                "size": "3.6MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-KCN/E系列/hardware/Lierda NT26-KCN E Series (New Version)_Hardware Design Manual_Rev1.1.pdf"
              },
              {
                "name": "Lierda NT26-KCN E Series (New Version)_Hardware Reference Design Manual_Rev1.0",
                "type": "pdf",
                "size": "513.9KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-KCN/E系列/hardware/Lierda NT26-KCN E Series (New Version)_Hardware Reference Design Manual_Rev1.0.pdf"
              },
              {
                "name": "Lierda NT26-KCN-E 3D Model",
                "type": "step",
                "size": "2.9MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-KCN/E系列/hardware/Lierda NT26-KCN-E 3D Model.step"
              },
              {
                "name": "Lierda NT26-KCN-E Series Footprint Rev2.0",
                "type": "zip",
                "size": "660.0KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-KCN/E系列/hardware/Lierda NT26-KCN-E Series Footprint Rev2.0.zip"
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
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/Lierda Science & Technology Group Co.,Ltd_NT26-KCN.PDF"
              },
              {
                "name": "NT26-KCN CCC Certificate",
                "type": "pdf",
                "size": "1.6MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN CCC Certificate.pdf"
              },
              {
                "name": "NT26-KCN CCC Report",
                "type": "zip",
                "size": "3.7MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN CCC Report.zip"
              },
              {
                "name": "NT26-KCN RoHS Report",
                "type": "pdf",
                "size": "1.2MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN RoHS Report.pdf"
              },
              {
                "name": "NT26-KCN SRRC Certificate",
                "type": "pdf",
                "size": "3.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN SRRC Certificate.pdf"
              },
              {
                "name": "NT26‑KCN NAL Certificate",
                "type": "pdf",
                "size": "881.7KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26‑KCN NAL Certificate.pdf"
              }
            ],
            "shared": true,
            "sharedFrom": "product"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          }
        ]
      },
      {
        "id": "F系列",
        "name": "NT26-KCN F",
        "models": [
          "NT26KCNF20NNA",
          "NT26KCNF00NNA"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-KCN F系列",
            "subtitle": "小容量多媒体 Cat.1 bis 模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 小容量多媒体",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-KCN F Series",
            "subtitle": "Small-Capacity Multimedia Cat.1 bis Module",
            "badge": "📡 Cellular · Cat.1 bis · Small-Capacity Multimedia",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-KCN Fシリーズ",
            "subtitle": "小容量マルチメディア Cat.1 bis モジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 小容量マルチメディア",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-KCN F 시리즈",
            "subtitle": "소용량 멀티미디어 Cat.1 bis 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 소용량 멀티미디어",
            "status": "자료 완비",
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
                "size": "642.0KB",
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
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "Lierda Science & Technology Group Co.,Ltd_NT26-KCN",
                "type": "pdf",
                "size": "277.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/Lierda Science & Technology Group Co.,Ltd_NT26-KCN.PDF"
              },
              {
                "name": "NT26-KCN CCC Certificate",
                "type": "pdf",
                "size": "1.6MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN CCC Certificate.pdf"
              },
              {
                "name": "NT26-KCN CCC Report",
                "type": "zip",
                "size": "3.7MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN CCC Report.zip"
              },
              {
                "name": "NT26-KCN RoHS Report",
                "type": "pdf",
                "size": "1.2MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN RoHS Report.pdf"
              },
              {
                "name": "NT26-KCN SRRC Certificate",
                "type": "pdf",
                "size": "3.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26-KCN SRRC Certificate.pdf"
              },
              {
                "name": "NT26‑KCN NAL Certificate",
                "type": "pdf",
                "size": "881.7KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/NT26-KCN/Certification/NT26‑KCN NAL Certificate.pdf"
              }
            ],
            "shared": true,
            "sharedFrom": "product"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
        "id": "B系列",
        "name": "NT26-FCN B",
        "models": [
          "NT26FCNB10WNA",
          "NT26FCNB30WNA",
          "NT26FCNB00WNA",
          "NT26FCNB70WNA",
          "NT26FCNB60WNA"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-FCN B系列",
            "subtitle": "标准OPEN Cat.1 bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 标准OPEN",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-FCN B Series",
            "subtitle": "Standard OPEN Cat.1 bis Cellular Module",
            "badge": "📡 Cellular · Cat.1 bis · Standard OPEN",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-FCN Bシリーズ",
            "subtitle": "標準 Open Cat.1 bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 標準 Open",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-FCN B 시리즈",
            "subtitle": "표준 Open Cat.1 bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 표준 Open",
            "status": "자료 완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-FCN B Series (KR) Hardware Design Manual_Rev1.1",
                "type": "pdf",
                "size": "3.8MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/B系列/hardware/Lierda NT26-FCN B Series (KR) Hardware Design Manual_Rev1.1.pdf"
              },
              {
                "name": "Lierda NT26-FCN B Series Hardware Design Manual_Rev2.0",
                "type": "pdf",
                "size": "3.7MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/B系列/hardware/Lierda NT26-FCN B Series Hardware Design Manual_Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26-FCN B Series(External Boost) Hardware Reference Design Manual_Rev1.0",
                "type": "pdf",
                "size": "849.7KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/B系列/hardware/Lierda NT26-FCN B Series(External Boost) Hardware Reference Design Manual_Rev1.0.pdf"
              },
              {
                "name": "Lierda NT26-FCN-B 3D Model",
                "type": "step",
                "size": "1.7MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/B系列/hardware/Lierda NT26-FCN-B 3D Model.step"
              },
              {
                "name": "Lierda NT26-FCN-B Series Footprint Rev3.0",
                "type": "zip",
                "size": "698.5KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/B系列/hardware/Lierda NT26-FCN-B Series Footprint Rev3.0.zip"
              }
            ],
            "shared": false
          },
          {
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "NT26-FCN CCC Certificate",
                "type": "pdf",
                "size": "908.7KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26-FCN CCC Certificate.pdf"
              },
              {
                "name": "NT26-FCN NAL Report",
                "type": "pdf",
                "size": "4.7MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26-FCN NAL Report.pdf"
              },
              {
                "name": "NT26-FCN RoHS Report",
                "type": "pdf",
                "size": "491.9KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26-FCN RoHS Report.pdf"
              },
              {
                "name": "NT26-FCN SRRC Certificate",
                "type": "pdf",
                "size": "1.6MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26-FCN SRRC Certificate.pdf"
              },
              {
                "name": "NT26‑FCN NAL Certificate",
                "type": "pdf",
                "size": "874.4KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26‑FCN NAL Certificate.pdf"
              },
              {
                "name": "Report",
                "type": "zip",
                "size": "3.5MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/Report.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "product"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          }
        ]
      },
      {
        "id": "C系列",
        "name": "NT26-FCN C",
        "models": [
          "NT26F6C0"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-FCN C系列",
            "subtitle": "宽电压 Cat.1 bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 宽电压",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-FCN C Series",
            "subtitle": "Wide-Voltage Cat.1 bis Cellular Module",
            "badge": "📡 Cellular · Cat.1 bis · Wide Voltage",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-FCN Cシリーズ",
            "subtitle": "広電圧 Cat.1 bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 広電圧",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-FCN C 시리즈",
            "subtitle": "넓은 전압 범위 지원 Cat.1 bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 넓은 전압 범위",
            "status": "자료 완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-FCN C Series (Wide Voltage Version)_Hardware Design Manual_Rev2.1",
                "type": "pdf",
                "size": "2.7MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/hardware/Lierda NT26-FCN C Series (Wide Voltage Version)_Hardware Design Manual_Rev2.1.pdf"
              },
              {
                "name": "Lierda NT26-FCN-C 3D Model",
                "type": "step",
                "size": "1.8MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/hardware/Lierda NT26-FCN-C 3D Model.step"
              },
              {
                "name": "Lierda NT26-FCN-C Series Footprint Rev2.0",
                "type": "zip",
                "size": "668.8KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/C系列/hardware/Lierda NT26-FCN-C Series Footprint Rev2.0.zip"
              }
            ],
            "shared": false
          },
          {
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "NT26-FCN CCC Certificate",
                "type": "pdf",
                "size": "908.7KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26-FCN CCC Certificate.pdf"
              },
              {
                "name": "NT26-FCN NAL Report",
                "type": "pdf",
                "size": "4.7MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26-FCN NAL Report.pdf"
              },
              {
                "name": "NT26-FCN RoHS Report",
                "type": "pdf",
                "size": "491.9KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26-FCN RoHS Report.pdf"
              },
              {
                "name": "NT26-FCN SRRC Certificate",
                "type": "pdf",
                "size": "1.6MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26-FCN SRRC Certificate.pdf"
              },
              {
                "name": "NT26‑FCN NAL Certificate",
                "type": "pdf",
                "size": "874.4KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/NT26‑FCN NAL Certificate.pdf"
              },
              {
                "name": "Report",
                "type": "zip",
                "size": "3.5MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FCN/certification/Report.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "product"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          }
        ]
      }
    ]
  },
  {
    "id": "NT26-FJP",
    "line": "Cat.1 bis",
    "name": "NT26-FJP",
    "color": "#4a9df8",
    "i18n": {
      "zh": {
        "fullName": "NT26-FJP",
        "subtitle": "Cat.1 bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT26-FJP",
        "subtitle": "Cat.1 bis Cellular Module"
      },
      "ja": {
        "fullName": "NT26-FJP",
        "subtitle": "Cat.1 bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT26-FJP",
        "subtitle": "Cat.1 bis 셀룰러 모듈"
      }
    },
    "variants": [
      {
        "id": "D系列",
        "name": "NT26-FJP D",
        "models": [
          "NT26JPD70NNA"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-FJP D系列",
            "subtitle": "日本版 Cat.1 bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 日本版",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-FJP D Series",
            "subtitle": "Cat.1 bis Cellular Module for Japan",
            "badge": "📡 Cellular · Cat.1 bis · Japan",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-FJP Dシリーズ",
            "subtitle": "日本版 Cat.1 bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 日本版",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-FJP D 시리즈",
            "subtitle": "일본판 Cat.1 bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 일본판",
            "status": "자료 완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-FJP D Series Hardware Design Manual_Rev1.2",
                "type": "pdf",
                "size": "4.2MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FJP/D系列/hardware/Lierda NT26-FJP D Series Hardware Design Manual_Rev1.2.pdf"
              },
              {
                "name": "Lierda NT26-FJP-D 3D Model",
                "type": "step",
                "size": "2.3MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FJP/D系列/hardware/Lierda NT26-FJP-D 3D Model.step"
              },
              {
                "name": "Lierda NT26-FJP-D Series Footprint Rev3.0",
                "type": "zip",
                "size": "47.9KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FJP/D系列/hardware/Lierda NT26-FJP-D Series Footprint Rev3.0.zip"
              }
            ],
            "shared": false
          },
          {
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "201250733_00_final-TELEC",
                "type": "pdf",
                "size": "319.5KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FJP/certification/201250733_00_final-TELEC.pdf"
              },
              {
                "name": "HP_25_0155_201_00_final-JATE",
                "type": "pdf",
                "size": "315.7KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FJP/certification/HP_25_0155_201_00_final-JATE.pdf"
              },
              {
                "name": "NT26-FJP-JATE",
                "type": "pdf",
                "size": "315.7KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FJP/certification/NT26-FJP-JATE.pdf"
              },
              {
                "name": "NT26-FJP-TELEC",
                "type": "pdf",
                "size": "319.5KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FJP/certification/NT26-FJP-TELEC.pdf"
              }
            ],
            "shared": true,
            "sharedFrom": "product"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          }
        ]
      }
    ]
  },
  {
    "id": "NT26-FEU",
    "line": "Cat.1 bis",
    "name": "NT26-FEU",
    "color": "#335bcd",
    "i18n": {
      "zh": {
        "fullName": "NT26-FEU",
        "subtitle": "Cat.1 bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT26-FEU",
        "subtitle": "Cat.1 bis Cellular Module"
      },
      "ja": {
        "fullName": "NT26-FEU",
        "subtitle": "Cat.1 bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT26-FEU",
        "subtitle": "Cat.1 bis 셀룰러 모듈"
      }
    },
    "variants": [
      {
        "id": "D系列",
        "name": "NT26-FEU D",
        "models": [
          "NT26FEUD60NNA"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-FEU D系列",
            "subtitle": "欧洲版 Cat.1 bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 欧洲版",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-FEU D Series",
            "subtitle": "Cat.1 bis Cellular Module for Europe",
            "badge": "📡 Cellular · Cat.1 bis · Europe",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-FEU Dシリーズ",
            "subtitle": "欧州版 Cat.1 bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 欧州版",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-FEU D 시리즈",
            "subtitle": "유럽판 Cat.1 bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 유럽판",
            "status": "자료 완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-FEU-D 3D Model",
                "type": "step",
                "size": "2.3MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FEU/D系列/hardware/Lierda NT26-FEU-D 3D Model.step"
              },
              {
                "name": "Lierda NT26-FEU-D Series Footprint Rev3.0",
                "type": "zip",
                "size": "45.9KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FEU/D系列/hardware/Lierda NT26-FEU-D Series Footprint Rev3.0.zip"
              },
              {
                "name": "Lierda NT26-FEU-D Series Hardware Design Manual_Rev1.7",
                "type": "pdf",
                "size": "4.1MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FEU/D系列/hardware/Lierda NT26-FEU-D Series Hardware Design Manual_Rev1.7.pdf"
              }
            ],
            "shared": false
          },
          {
            "id": "certification",
            "icon": "shield",
            "files": [
              {
                "name": "BL-SZ2531075D01 CE VOC RED NT26FEU ",
                "type": "pdf",
                "size": "250.9KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FEU/certification/BL-SZ2531075D01 CE VOC RED NT26FEU .pdf"
              },
              {
                "name": "LIERDA_NT26-FEU_CE_RED_Conformity_Certificate",
                "type": "pdf",
                "size": "250.9KB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FEU/certification/LIERDA_NT26-FEU_CE_RED_Conformity_Certificate.pdf"
              },
              {
                "name": "LIERDA_NT26-FEU_EU_RoHS_Report",
                "type": "pdf",
                "size": "1.9MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FEU/certification/LIERDA_NT26-FEU_EU_RoHS_Report.pdf"
              },
              {
                "name": "NGBEC25003952302",
                "type": "pdf",
                "size": "1.9MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FEU/certification/NGBEC25003952302.pdf"
              }
            ],
            "shared": true,
            "sharedFrom": "product"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          }
        ]
      }
    ]
  },
  {
    "id": "NT26-FLA",
    "line": "Cat.1 bis",
    "name": "NT26-FLA",
    "color": "#639af6",
    "i18n": {
      "zh": {
        "fullName": "NT26-FLA",
        "subtitle": "Cat.1 bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT26-FLA",
        "subtitle": "Cat.1 bis Cellular Module"
      },
      "ja": {
        "fullName": "NT26-FLA",
        "subtitle": "Cat.1 bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT26-FLA",
        "subtitle": "Cat.1 bis 셀룰러 모듈"
      }
    },
    "variants": [
      {
        "id": "D系列",
        "name": "NT26-FLA D",
        "models": [
          "NT26F6D0-LA"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-FLA D系列",
            "subtitle": "拉美版 Cat.1 bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 拉美版",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-FLA D Series",
            "subtitle": "Cat.1 bis Cellular Module for Latin America",
            "badge": "📡 Cellular · Cat.1 bis · Latin America",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-FLA Dシリーズ",
            "subtitle": "ラテンアメリカ版 Cat.1 bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · ラテンアメリカ版",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-FLA D 시리즈",
            "subtitle": "라틴 아메리카판 Cat.1 bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 라틴 아메리카판",
            "status": "자료 완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-FLA Hardware Design Manual_Rev1.0",
                "type": "pdf",
                "size": "4.1MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FLA/D系列/hardware/Lierda NT26-FLA Hardware Design Manual_Rev1.0.pdf"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          }
        ]
      }
    ]
  },
  {
    "id": "NT26-FNA",
    "line": "Cat.1 bis",
    "name": "NT26-FNA",
    "color": "#465ef7",
    "i18n": {
      "zh": {
        "fullName": "NT26-FNA",
        "subtitle": "Cat.1 bis 蜂窝通信模组"
      },
      "en": {
        "fullName": "NT26-FNA",
        "subtitle": "Cat.1 bis Cellular Module"
      },
      "ja": {
        "fullName": "NT26-FNA",
        "subtitle": "Cat.1 bis セルラーモジュール"
      },
      "ko": {
        "fullName": "NT26-FNA",
        "subtitle": "Cat.1 bis 셀룰러 모듈"
      }
    },
    "variants": [
      {
        "id": "D系列",
        "name": "NT26-FNA D",
        "models": [
          "NT26F6D0-NA"
        ],
        "i18n": {
          "zh": {
            "fullName": "NT26-FNA D系列",
            "subtitle": "北美版 Cat.1 bis 蜂窝通信模组",
            "badge": "📡 蜂窝通信 · Cat.1 bis · 北美版",
            "status": "完整",
            "readingOrder": "Datasheet → 硬件设计 → AT指令 → EVB资料"
          },
          "en": {
            "fullName": "NT26-FNA D Series",
            "subtitle": "Cat.1 bis Cellular Module for North America",
            "badge": "📡 Cellular · Cat.1 bis · North America",
            "status": "Complete",
            "readingOrder": "Datasheet → Hardware Design → AT Commands → EVB Docs"
          },
          "ja": {
            "fullName": "NT26-FNA Dシリーズ",
            "subtitle": "北米版 Cat.1 bis セルラーモジュール",
            "badge": "📡 セルラー通信 · Cat.1 bis · 北米版",
            "status": "資料完備",
            "readingOrder": "Datasheet → ハードウェア設計 → ATコマンド → EVB資料"
          },
          "ko": {
            "fullName": "NT26-FNA D 시리즈",
            "subtitle": "북미판 Cat.1 bis 셀룰러 모듈",
            "badge": "📡 셀룰러 통신 · Cat.1 bis · 북미판",
            "status": "자료 완비",
            "readingOrder": "Datasheet → 하드웨어 설계 → AT 명령 → EVB 자료"
          }
        },
        "categories": [
          {
            "id": "hardware",
            "icon": "cpu",
            "files": [
              {
                "name": "Lierda NT26-FNA Hardware Design Manual_Rev1.0",
                "type": "pdf",
                "size": "4.1MB",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/NT26-FNA/D系列/hardware/Lierda NT26-FNA Hardware Design Manual_Rev1.0.pdf"
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
                "r2Key": "Cat.1 bis/software/Lierda LTE Standard(Q) Series AT Command Manual_Rev2.14.pdf"
              },
              {
                "name": "Lierda NT26-FCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "663.9KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-FCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda NT26-KCN OpenCPU Pin Multiplexing Table",
                "type": "xlsx",
                "size": "416.8KB",
                "date": "2026-05-25",
                "r2Key": "Cat.1 bis/software/Lierda NT26-KCN OpenCPU Pin Multiplexing Table.xlsx"
              },
              {
                "name": "Lierda_SDK_V0505",
                "type": "link",
                "url": "https://drive.google.com/file/d/1C63DUFZh-amLiYV0SGue5icV4t415ZB0/view?usp=drive_link",
                "descriptions": {
                  "zh": "SDK压缩包下载",
                  "en": "SDK Download",
                  "ja": "SDKダウンロード",
                  "ko": "SDK 다운로드"
                },
                "size": "",
                "date": "2026-05-24",
                "r2Key": "Cat.1 bis/software/Lierda_SDK_V0505"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
          },
          {
            "id": "tools",
            "icon": "wrench",
            "files": [
              {
                "name": "Flash Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/pYLaezmVNevBAvkwfkqxAz7rWrMqPxX6?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool"
              },
              {
                "name": "Flash Tool",
                "type": "zip",
                "size": "47.4MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Flash Tool.zip"
              },
              {
                "name": "Log Tool",
                "type": "link",
                "url": "https://alidocs.dingtalk.com/i/nodes/9E05BDRVQ2g45gywupN6mdO7J63zgkYA?utm_scene=team_space",
                "descriptions": {},
                "size": "",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool"
              },
              {
                "name": "Log Tool",
                "type": "zip",
                "size": "23.6MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/Log Tool.zip"
              },
              {
                "name": "FotaToolkit_V3.6.2.0",
                "type": "zip",
                "size": "49.5MB",
                "date": "2026-05-23",
                "r2Key": "Cat.1 bis/通用/tools/FotaToolkit_V3.6.2.0.zip"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
                "r2Key": "Cat.1 bis/通用/evb/Lierda Cat1 & NB-IoT Module Universal Development Board User Manual Rev2.0.pdf"
              },
              {
                "name": "Lierda NT26x Series Adapter Board Schematic Diagram",
                "type": "pdf",
                "size": "302.6KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/Lierda NT26x Series Adapter Board Schematic Diagram.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01",
                "type": "pdf",
                "size": "636.3KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_Assembly drawing(TOP)_Rev01.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_ENG",
                "type": "pdf",
                "size": "796.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_ENG.pdf"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "pcbdoc",
                "size": "9.1MB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.PcbDoc"
              },
              {
                "name": "LSDWNBT-R104095001_V01",
                "type": "schdoc",
                "size": "948.0KB",
                "date": "2026-05-22",
                "r2Key": "Cat.1 bis/通用/evb/LSDWNBT-R104095001_V01.SchDoc"
              }
            ],
            "shared": true,
            "sharedFrom": "line"
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
