define({ "api": [
  {
    "type": "get",
    "url": "/v1/stores/?benefit={benefitId}&&lttd={lttd}&&lgtd={lgtd}&&count={count}",
    "title": "Get the available stores",
    "group": "Available_Store",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Language",
            "defaultValue": "ko",
            "description": "<p>Optional    Language set</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefitId",
            "description": "<p>Mandatory   The Identifier of voucher and coupon</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "lttd",
            "description": "<p>Mandatory   The latitude of requested position</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "lgtd",
            "description": "<p>Mandatory   The longitude of requested position</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "count",
            "description": "<p>Optional    The number of request store</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "stores",
            "description": "<p>The list of store where the customer can redeem voucher and coupon</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "stores.store_id",
            "description": "<p>The identifier of specific store</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "stores.address",
            "description": "<p>The address of store</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "stores.latitude",
            "description": "<p>The latitude</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "stores.longitude",
            "description": "<p>The longitude</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "stores.store_name",
            "description": "<p>The name of store</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "stores.description",
            "description": "<p>The description for store information</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "stores.distance",
            "description": "<p>The geographical distance between store and customer location</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \t\t\"stores\" : [\n\t\t\t\t{\n\t\t\t\t\t\"store_id\" : \"4\",\n\t\t\t\t\t\"address\" : null,\n\t\t\t\t\t\"latitude\" : 37.5288671,\n\t\t\t\t\t\"longitude\" : 126.9200552,\n\t\t\t\t\t\"store_name\" : \"KFC\",\n\t\t\t\t\t\"description\" : \"24 Hours available store\",\n\t\t\t\t\t\"distance\" : 127\n\t\t\t\t}\n\t\t\t]\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/StoreController.java",
    "groupTitle": "Available_Store",
    "name": "GetV1StoresBenefitBenefitidLttdLttdLgtdLgtdCountCount",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotRegistedBenefitError",
            "description": "<p>The benefit is not registered. - code(3001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAvailableStoreError",
            "description": "<p>The store is not available. - code(4002)</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GeographicMinusValueError",
            "description": "<p>The Geographical position argument is minus value. - code(4004)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/cards/{cardId}/acquirable/benefits",
    "title": "Get the list of acquirable Voucher and Coupon",
    "group": "Card_Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Language",
            "defaultValue": "en",
            "description": "<p>Optional    Language set</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cardId",
            "description": "<p>Mandatory   Card Identifier given by k-secret API service</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "category_id",
            "description": "<p>Identifier of the Category.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category_name",
            "description": "<p>The Name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_id",
            "description": "<p>Identifier of the Voucher and Coupon</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_state",
            "description": "<p>State of Voucher and Coupon. Registered(10),    Usable(20), Unsuable(30)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_type_code",
            "description": "<p>The Voucher and Coupon Type. SingleBillDiscount(11), SinglePointReward(12), MultipleBillDiscount(21), MultiplePointReward(22).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_use_count",
            "description": "<p>The maximum count of available voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "effective_date",
            "description": "<p>The effective date of voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "expire_date",
            "description": "<p>The expire date of voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_type",
            "description": "<p>The type of bill discount. Discount by amount(10), Discount by Rate(20)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_price",
            "description": "<p>The discount amount.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_disc_price",
            "description": "<p>The maximum discount amount that voucher and coupon have.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_rate",
            "description": "<p>The discount rate of voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rwd_type",
            "description": "<p>The type of reward voucher and coupon. RewardPoint(10), RewardRate(20)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "rwd_point",
            "description": "<p>The amount of point when using voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_rwd_point",
            "description": "<p>The maximum reward point when customer redeems.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "rwd_point_rate",
            "description": "<p>The ratio of reward point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "min_pay_price",
            "description": "<p>The minimum amount to redeem voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_image",
            "description": "<p>The image path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_thumbnail",
            "description": "<p>The thumnail image path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>The contents to describe voucher and coupon in detail.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "note",
            "description": "<p>The precautions when redeeming voucher and coupon</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n [{\n  \"category_id\" : 8,\n\t\"category_name\" : \"Coffee\",\n\t\"benefit_id\" : \"BNF0000002020150731\",\n\t\"benefit_name\" : \"Starbucks Discount\",\n\t\"benefit_state\" : \"20\",\n\t\"benefit_type_code\" : \"21\",\n\t\"max_use_count\" : 5,\n\t\"effective_date\" : \"2015-07-31\",\n\t\"expire_date\" : \"2015-08-31\",\n\t\"disc_type\" : null,\n\t\"disc_price\" : 2000,\n\t\"max_disc_price\" : 2000,\n\t\"disc_rate\" : null,\n\t\"rwd_type\" : null,\n\t\"rwd_point\" : null,\n\t\"max_rwd_point\" : null,\n\t\"rwd_point_rate\" : null,\n\t\"min_pay_price\" : 10000,\n\t\"benefit_image\" : \"/resources/img/vnc/BNF0000002020150731ko.png\",\n\t\"benefit_thumbnail\" : \"/resources/img/vnc/thumbnail/BNF0000002020150731ko.png\",\n\t\"description\" : \"Summer Discount Event\",\n\t\"note\" : \"Only available limited duration\"\n} ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/CardController.java",
    "groupTitle": "Card_Service",
    "name": "GetV1CardsCardidAcquirableBenefits",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterMissingError",
            "description": "<p>Parameter Missing Error - code(1001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardNotRegisterError",
            "description": "<p>The requested Card is not registered - code(2005).</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/cards/{cardId}/acquired/benefits",
    "title": "Get the list of acquired Voucher and Coupon",
    "group": "Card_Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Language",
            "defaultValue": "en",
            "description": "<p>Optional    Language set</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cardId",
            "description": "<p>Mandatory   Card Identifier given by k-secret API service</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "category_id",
            "description": "<p>Identifier of the Category.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category_name",
            "description": "<p>The Name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_id",
            "description": "<p>Identifier of the Voucher and Coupon</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_state",
            "description": "<p>State of Voucher and Coupon. Registered(10),    Usable(20), Unsuable(30)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_type_code",
            "description": "<p>The Voucher and Coupon Type. SingleBillDiscount(11), SinglePointReward(12), MultipleBillDiscount(21), MultiplePointReward(22).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_use_count",
            "description": "<p>The maximum count of available voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "effective_date",
            "description": "<p>The effective date of voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "expire_date",
            "description": "<p>The expire date of voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_type",
            "description": "<p>The type of bill discount. Discount by amount(10), Discount by Rate(20)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_price",
            "description": "<p>The discount amount.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_disc_price",
            "description": "<p>The maximum discount amount that voucher and coupon have.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_rate",
            "description": "<p>The discount rate of voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rwd_type",
            "description": "<p>The type of reward voucher and coupon. RewardPoint(10), RewardRate(20)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "rwd_point",
            "description": "<p>The amount of point when using voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_rwd_point",
            "description": "<p>The maximum reward point when customer redeems.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "rwd_point_rate",
            "description": "<p>The ratio of reward point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "min_pay_price",
            "description": "<p>The minimum amount to redeem voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_image",
            "description": "<p>The image path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_thumbnail",
            "description": "<p>The thumnail image path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>The contents to describe voucher and coupon in detail.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "note",
            "description": "<p>The precautions when redeeming voucher and coupon</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n[{\n  \"category_id\" : 8,\n\t\"category_name\" : \"Coffee\",\n\t\"benefit_id\" : \"BNF0000002020150731\",\n\t\"benefit_name\" : \"Starbucks Discount\",\n\t\"benefit_state\" : \"20\",\n\t\"benefit_type_code\" : \"21\",\n\t\"max_use_count\" : 5,\n\t\"effective_date\" : \"2015-07-31\",\n\t\"expire_date\" : \"2015-08-31\",\n\t\"disc_type\" : null,\n\t\"disc_price\" : 2000,\n\t\"max_disc_price\" : 2000,\n\t\"disc_rate\" : null,\n\t\"rwd_type\" : null,\n\t\"rwd_point\" : null,\n\t\"max_rwd_point\" : null,\n\t\"rwd_point_rate\" : null,\n\t\"min_pay_price\" : 10000,\n\t\"benefit_image\" : \"/resources/img/vnc/BNF0000002020150731ko.png\",\n\t\"benefit_thumbnail\" : \"/resources/img/vnc/thumbnail/BNF0000002020150731ko.png\",\n\t\"description\" : \"Summer Discount Event\",\n\t\"note\" : \"Only available limited duration\"\n} ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/CardController.java",
    "groupTitle": "Card_Service",
    "name": "GetV1CardsCardidAcquiredBenefits",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterMissingError",
            "description": "<p>Parameter Missing Error - code(1001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardNotRegisterError",
            "description": "<p>The requested Card is not registered - code(2005).</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/cards/{cardId}/redeemed/benefits",
    "title": "Get the list of redeemed Voucher and Coupon",
    "group": "Card_Service",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Language",
            "defaultValue": "en",
            "description": "<p>Optional    Language set</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cardId",
            "description": "<p>Mandatory   Card Identifier given by k-secret API service</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "category_id",
            "description": "<p>Identifier of the Category.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category_name",
            "description": "<p>The Name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_id",
            "description": "<p>Identifier of the Voucher and Coupon</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_state",
            "description": "<p>State of Voucher and Coupon. Registered(10),    Usable(20), Unsuable(30)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_type_code",
            "description": "<p>The Voucher and Coupon Type. SingleBillDiscount(11), SinglePointReward(12), MultipleBillDiscount(21), MultiplePointReward(22).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_use_count",
            "description": "<p>The maximum count of available voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "effective_date",
            "description": "<p>The effective date of voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "expire_date",
            "description": "<p>The expire date of voucher and coupon redemption.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_type",
            "description": "<p>The type of bill discount. Discount by amount(10), Discount by Rate(20)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_price",
            "description": "<p>The discount amount.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_disc_price",
            "description": "<p>The maximum discount amount that voucher and coupon have.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "disc_rate",
            "description": "<p>The discount rate of voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rwd_type",
            "description": "<p>The type of reward voucher and coupon. RewardPoint(10), RewardRate(20)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "rwd_point",
            "description": "<p>The amount of point when using voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "max_rwd_point",
            "description": "<p>The maximum reward point when customer redeems.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "rwd_point_rate",
            "description": "<p>The ratio of reward point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "min_pay_price",
            "description": "<p>The minimum amount to redeem voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_image",
            "description": "<p>The image path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_thumbnail",
            "description": "<p>The thumnail image path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>The contents to describe voucher and coupon in detail.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "note",
            "description": "<p>The precautions when redeeming voucher and coupon</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  [ {\n \t\"category_id\" : 8,\n\t\"category_name\" : \"Coffee\",\n\t\"benefit_id\" : \"BNF0000002020150731\",\n\t\"benefit_name\" : \"Starbucks Discount\",\n\t\"benefit_state\" : \"20\",\n\t\"benefit_type_code\" : \"21\",\n\t\"max_use_count\" : 5,\n\t\"effective_date\" : \"2015-07-31\",\n\t\"expire_date\" : \"2015-08-31\",\n\t\"disc_type\" : null,\n\t\"disc_price\" : 2000,\n\t\"max_disc_price\" : 2000,\n\t\"disc_rate\" : null,\n\t\"rwd_type\" : null,\n\t\"rwd_point\" : null,\n\t\"max_rwd_point\" : null,\n\t\"rwd_point_rate\" : null,\n\t\"min_pay_price\" : 10000,\n\t\"benefit_image\" : \"/resources/img/vnc/BNF0000002020150731ko.png\",\n\t\"benefit_thumbnail\" : \"/resources/img/vnc/thumbnail/BNF0000002020150731ko.png\",\n\t\"description\" : \"Summer Discount Event\",\n\t\"note\" : \"Only available limited duration\"\n} ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/CardController.java",
    "groupTitle": "Card_Service",
    "name": "GetV1CardsCardidRedeemedBenefits",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterMissingError",
            "description": "<p>Parameter Missing Error - code(1001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardNotRegisterError",
            "description": "<p>The requested Card is not registered - code(2005).</p> "
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v1/cards",
    "title": "Register customer's card",
    "group": "Card_Service",
    "parameter": {
      "fields": {
        "CardRequest": [
          {
            "group": "CardRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pan",
            "description": "<p>Mandatory   Primary Account Number</p> "
          },
          {
            "group": "CardRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "expire_date",
            "description": "<p>Mandatory   Card Expire Date</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cardId",
            "description": "<p>Identifier of the Customer that have.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"cardId\": \"CR000000000\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/CardController.java",
    "groupTitle": "Card_Service",
    "name": "PostV1Cards",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommonServerError",
            "description": "<p>The common Server Error occurs - code(1000)</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PanFormatError",
            "description": "<p>The requested PAN Format is xxxx-xxxx-xxxx-xxxx. - code(2003)</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardExpireDateFormatError",
            "description": "<p>The requested card expire date format is MM/yyyy. - code(2004)</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardExpireDateOverdueError",
            "description": "<p>The passed expire date is over. - code(2006)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v1/cards/{cardId}/benefits/{benefitId}",
    "title": "Acquire the Voucher and Coupon",
    "group": "Card_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cardId",
            "description": "<p>Mandatory   Card Identifier given by k-secret API service</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefitId",
            "description": "<p>Mandatory   Voucher and Coupon Identifier Generated by k-secret API service</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "card_id",
            "description": "<p>The identifier of customer card</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_id",
            "description": "<p>The identifier of voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "state",
            "description": "<p>The state of acquired voucher and coupon. Acquired(10), Removed(20), Redeemed(30)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "primary",
            "description": "<p>The state of acquired voucher and coupon.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"card_benefit\": {\n\t\t\"card_id\":{cardId},\n\t\t\"benefit_id\":\"BNFXXXXXXX\",\n\t\t\"state\":\"10\",\n\t\t\"primary\": \"Y\"\n\t\t}\n\t    ...\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/CardController.java",
    "groupTitle": "Card_Service",
    "name": "PostV1CardsCardidBenefitsBenefitid",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardNotRegisterError",
            "description": "<p>The requested Card is not registered - code(2005).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyIssuedBenefitError",
            "description": "<p>The requested benefit is already registered - code(3005).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotRegistedBenefitError",
            "description": "<p>The benefit is not registered. - code(3001).</p> "
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/v1/cards/{cardId}/benefits/{benefitId}",
    "title": "Update the Voucher and Coupon to primary",
    "group": "Card_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cardId",
            "description": "<p>Mandatory   Card Identifier given by k-secret API service</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefitId",
            "description": "<p>Mandatory   Benefit Identifier Generated by k-secret API service</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "primary_result",
            "description": "<p>The result of customer primary setting request</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"primary_result\":true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/CardController.java",
    "groupTitle": "Card_Service",
    "name": "PutV1CardsCardidBenefitsBenefitid",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardNotRegisterError",
            "description": "<p>The requested Card is not registered - code(2005).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BenefitNotUsableError",
            "description": "<p>The requested benefit is not usable - code(3003).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BenefitApprovalError",
            "description": "<p>The requested benefit is approved before issuing - code(3004).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BenefitNotIssuedError",
            "description": "<p>The requested benefit is not issued - code(3002).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotRegistedBenefitError",
            "description": "<p>The benefit is not registered. - code(3001).</p> "
          }
        ]
      }
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/resources-local/static/main.js",
    "group": "D__Project_Secret_source_BizCoreService_src_main_resources_local_static_main_js",
    "groupTitle": "D__Project_Secret_source_BizCoreService_src_main_resources_local_static_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/target/classes/static/main.js",
    "group": "D__Project_Secret_source_BizCoreService_target_classes_static_main_js",
    "groupTitle": "D__Project_Secret_source_BizCoreService_target_classes_static_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/target/ksecret-biz-core-1.0.0/WEB-INF/classes/static/main.js",
    "group": "D__Project_Secret_source_BizCoreService_target_ksecret_biz_core_1_0_0_WEB_INF_classes_static_main_js",
    "groupTitle": "D__Project_Secret_source_BizCoreService_target_ksecret_biz_core_1_0_0_WEB_INF_classes_static_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/target/ksecret-biz-core-1.0.0/doc/main.js",
    "group": "D__Project_Secret_source_BizCoreService_target_ksecret_biz_core_1_0_0_doc_main_js",
    "groupTitle": "D__Project_Secret_source_BizCoreService_target_ksecret_biz_core_1_0_0_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/v1/benefits/cancel",
    "title": "Cancel the used Voucher and Coupon",
    "group": "Voucher_and_Coupon",
    "parameter": {
      "fields": {
        "BenefitUseRequest": [
          {
            "group": "BenefitUseRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pan",
            "description": "<p>Mandatory   Primary Account Number</p> "
          },
          {
            "group": "BenefitUseRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_id",
            "description": "<p>Mandatory Transaction Number</p> "
          },
          {
            "group": "BenefitUseRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "store_id",
            "description": "<p>Mandatory Store Identifier</p> "
          },
          {
            "group": "BenefitUseRequest",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount to buy something</p> "
          },
          {
            "group": "BenefitUseRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "gcm_api_key",
            "description": "<p>push identifier</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pan",
            "description": "<p>The primary account number.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_id",
            "description": "<p>The identifier of voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_id",
            "description": "<p>The identifier of transaction.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "store_id",
            "description": "<p>The identifier of store identified by card issuer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>The number of amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "discount_amount",
            "description": "<p>The discount amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "saved_point",
            "description": "<p>The saved point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "gcm_msg_notification",
            "description": "<p>The notification result</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"pan\" : \"1212121221221212\",\n\t\t\"benefit_id\" : \"BNF0000001720150723\",\n\t\t\"transaction_id\" : \"TR0111111112\",\n\t\t\"store_id\" : \"79\",\n\t\t\"amount\" : 50000,\n\t\t\"discount_amount\" : 25000,\n\t\t\"saved_point\" : null,\n\t\t\"gcm_msg_notification\" : false\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/BenefitController.java",
    "groupTitle": "Voucher_and_Coupon",
    "name": "PostV1BenefitsCancel",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterMissingError",
            "description": "<p>Parameter Missing Error - code(1001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BizLogicHandlingError",
            "description": "<p>Business Handling Error - code(1005).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardNotRegisterError",
            "description": "<p>The requested Card is not registered - code(2005).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoMatchedCardPatterError",
            "description": "<p>The requested Card is not belong to this system - code(2007).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoPrimaryBenefitError",
            "description": "<p>The requested benefit is not a primary state - code(3014).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoRegisteredBenefitError",
            "description": "<p>The requested benefit is not registered - code(3001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InAvailableTranxIdError",
            "description": "<p>The transaction id is not available - code(3015).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InAvailableBenefitStateError",
            "description": "<p>The state of benefit is not avilable - code(3016).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BenefitCancelError",
            "description": "<p>The requested benefit is not available with cancel condition - code(3017).</p> "
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v1/benefits/redeem",
    "title": "Redeem the specific Voucher and Coupon",
    "group": "Voucher_and_Coupon",
    "parameter": {
      "fields": {
        "BenefitUseRequest": [
          {
            "group": "BenefitUseRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pan",
            "description": "<p>Mandatory   Primary Account Number</p> "
          },
          {
            "group": "BenefitUseRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_id",
            "description": "<p>Mandatory Transaction Number</p> "
          },
          {
            "group": "BenefitUseRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "store_id",
            "description": "<p>Mandatory Store Identifier</p> "
          },
          {
            "group": "BenefitUseRequest",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount to buy something</p> "
          },
          {
            "group": "BenefitUseRequest",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "gcm_api_key",
            "description": "<p>Google Cloud API Key value</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pan",
            "description": "<p>The primary account number.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "benefit_id",
            "description": "<p>The identifier of voucher and coupon.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "transaction_id",
            "description": "<p>The identifier of transaction.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "store_id",
            "description": "<p>The identifier of store identified by card issuer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "amount",
            "description": "<p>The number of amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "discount_amount",
            "description": "<p>The discount amount</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>BigDecimal</p> ",
            "optional": false,
            "field": "saved_point",
            "description": "<p>The saved point.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "gcm_msg_notification",
            "description": "<p>The notification result</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"pan\" : \"1212121221221212\",\n\t\t\"benefit_id\" : \"BNF0000001720150723\",\n\t\t\"transaction_id\" : \"TR0111111112\",\n\t\t\"store_id\" : \"79\",\n\t\t\"amount\" : 50000,\n\t\t\"discount_amount\" : 25000,\n\t\t\"saved_point\" : null,\n\t\t\"gcm_msg_notification\" : false\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/Project/Secret/source/BizCoreService/src/main/java/com/konai/ksecret/web/controller/BenefitController.java",
    "groupTitle": "Voucher_and_Coupon",
    "name": "PostV1BenefitsRedeem",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterMissingError",
            "description": "<p>Parameter Missing Error - code(1001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BizLogicHandlingError",
            "description": "<p>Business Handling Error - code(1005).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardNotRegisterError",
            "description": "<p>The requested Card is not registered - code(2005).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoMatchedCardPatterError",
            "description": "<p>The requested Card is not belong to this system - code(2007).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoPrimaryBenefitError",
            "description": "<p>The requested benefit is not a primary state - code(3014).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoRegisteredBenefitError",
            "description": "<p>The requested benefit is not registered - code(3001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BlackListStoreError",
            "description": "<p>The requested benefit can not use in this store - code(4001).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoContractStoreError",
            "description": "<p>The benefit can not use in this store - code(3006).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OverlappedTranxIdError",
            "description": "<p>The id of transaction is overlapped - code(3018).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidAmountError",
            "description": "<p>The amounts are not available with this benefit - code(3010).</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BenefitUseError",
            "description": "<p>The request benefit is not available with use condition - code(3013).</p> "
          }
        ]
      }
    }
  }
] });