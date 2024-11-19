import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategory {
	BEDROOM = 'BEDROOM', // 침실
	LIVINGROOM = 'LIVINGROOM', // 거실
	KITCHEN = 'KITCHEN', // 주방
}

registerEnumType(ProductCategory, {
	name: 'ProductCategory',
});

export enum ProductType {
	MATTRESS = 'MATTRESS', // 매트리스
	BED_FRAME = 'BED FRAME', // 침대프레임
	BABY_BED = 'BABY BED', // 유아동침대
	BEDROOM_SET = 'BEDROOM SET', // 침실세트
	SOFA = 'SOFA', // 소파
	TABLE = 'TABLE', // 테이블
	CHAIR = 'CHAIR', // 의자
	DESK = 'DESK', // 책상
	LIVING_ROOM_CABINET = 'LIVING ROOM CABINET', // 거실장
	DRAWER = 'DRAWER', // 서랍장
	BEDSIDE_TABLE = 'BEDSIDE TABLE', // 협탁
	DRESSER = 'DRESSER', // 화장대
	DINING_TABLE = 'DINING TABLE', // 식탁
	TOPPER = 'TOPPER', // 토퍼
	PILLOW = 'PILLOW', // 베개
	COVER = 'COVER', // 커버
}

registerEnumType(ProductType, {
	name: 'ProductType',
});

export enum ProductChairType {
	DESK_CHAIR = 'DESK_CHAIR', // 책상의자
	//GAMING_CHAIR = 'GAMING_CHAIR',         // 게이밍의자
	OFFICE_CHAIR = 'OFFICE_CHAIR', // 사무용의자
	HIGH_BACK_CHAIR = 'HIGH_BACK_CHAIR', // 하이팩의자
	CHILDRENS_DESK_CHAIR = 'CHILDRENS_DESK_CHAIR', // 아동책상의자
	FLOOR_CHAIR = 'FLOOR_CHAIR', // 좌식의자
	HEADREST_CHAIR = 'HEADREST_CHAIR', // 목받침의자
	DINING_CHAIR = 'DINING_CHAIR', // 식탁의자
	FOLDING_CHAIR = 'FOLDING_CHAIR', // 간이/접이식의자
	INTERIOR_CHAIR = 'INTERIOR_CHAIR', // 인테리어의자
	LOUNGE_CHAIR = 'LOUNGE_CHAIR', // 안락의자
	ROCKING_CHAIR = 'ROCKING_CHAIR', // 흔들의자
	STOOL = 'STOOL', // 스툴
	FOOTREST = 'FOOTREST', // 의자발받침대
	//MATERIAL_BASED_DESK_CHAIR = 'MATERIAL_BASED_DESK_CHAIR' // 소재별 책상의자
}

registerEnumType(ProductChairType, {
	name: 'ProductChairType',
});

export enum ProductSofaType {
	LEATHER_SOFA = 'LEATHER_SOFA', // 가죽소파
	FAUX_LEATHER_SOFA = 'FAUX_LEATHER_SOFA', // 인조가죽소파
	FABRIC_SOFA = 'FABRIC_SOFA', // 패브릭소파
	RECLINER_SOFA = 'RECLINER_SOFA', // 리클라이너소파
	FLOOR_SOFA = 'FLOOR_SOFA', // 좌식소파
	SOFA_BED = 'SOFA_BED', // 소파베드
	BENCH_SOFA = 'BENCH_SOFA', // 벤치소파
	STORAGE_SOFA = 'STORAGE_SOFA', // 수납소파
	BEAN_BAG = 'BEAN_BAG', // 빈백
	STONE_CLAY_SOFA = 'STONE_CLAY_SOFA', // 돌/흙소파
	CHILDRENS_SOFA = 'CHILDRENS_SOFA', // 유아동소파
	OFFICE_SOFA = 'OFFICE_SOFA', // 사무용소파
	NEW_MATERIAL_SOFA = 'NEW_MATERIAL_SOFA', // 신소재 소파
	SIZE_BASED_SOFA = 'SIZE_BASED_SOFA', // 사이즈별 소파
}

registerEnumType(ProductSofaType, {
	name: 'ProductSofaType',
});

export enum ProductDiningTableType {
	TABLE_AND_CHAIR_SET = 'TABLE_AND_CHAIR_SET', // 식탁/의자
	//DISH_CABINET = 'DISH_CABINET',                      // 그릇장/컵보드
	KITCHEN_STORAGE_CABINET = 'KITCHEN_STORAGE_CABINET', // 주방수납장
	//OTHER_KITCHEN_FURNITURE = 'OTHER_KITCHEN_FURNITURE', // 기타주방가구
	SIZE_BASED_TABLE = 'SIZE_BASED_TABLE', // 사이즈별 식탁
	SHAPE_BASED_TABLE = 'SHAPE_BASED_TABLE', // 형태별 식탁
	MATERIAL_BASED_TABLE = 'MATERIAL_BASED_TABLE', // 소재별 식탁
}

registerEnumType(ProductDiningTableType, {
	name: 'ProductDiningTableType',
});

export enum ProductStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(ProductStatus, {
	name: 'ProductStatus',
});

export enum ProductMattressThickness {
	UP_TO_5CM = 'Up to 5 cm', // ~5cm
	FROM_6_TO_10CM = '6 cm ~ 10 cm', // 6cm~10cm
	FROM_11_TO_15CM = '11 cm ~ 15 cm', // 11cm~15cm
	FROM_16_TO_20CM = '16 cm ~ 20 cm', // 16cm~20cm
	FROM_21_TO_25CM = '21 cm ~ 25 cm', // 21cm~25cm
	FROM_26_TO_30CM = '26 cm ~ 30 cm', // 26cm~30cm
	FROM_31_TO_35CM = '31 cm ~ 35 cm', // 31cm~35cm
	ABOVE_36CM = 'Above 36 cm', // 36cm~
}

registerEnumType(ProductMattressThickness, {
	name: 'ProductMattressThickness',
});

export enum ProductMattressSize {
	SINGLE = 'S', // 싱글매트리스  => S
	SUPER_SINGLE = 'SS', // 슈퍼싱글매트리스 => SS
	DOUBLE = 'D', // 더블매트리스 => D
	QUEEN = 'Q', // 퀸매트리스 => Q
	KING = 'K', // 킹매트리스 => K
}

registerEnumType(ProductMattressSize, {
	name: 'ProductMattressSize',
});

// export enum ProductLocation {
// 	SEOUL = 'SEOUL',
// 	BUSAN = 'BUSAN',
// 	INCHEON = 'INCHEON',
// 	DAEGU = 'DAEGU',
// 	GYEONGJU = 'GYEONGJU',
// 	GWANGJU = 'GWANGJU',
// 	DAEJEON = 'DAEJEON',
// 	JEJU = 'JEJU',
// 	PYEONGTAEK = 'PYEONGTAEK',  // Kiritilgan: Pyeongtaek
// 	CHEONAN = 'CHEONAN',        // Kiritilgan: Cheonan
// 	GIMCHEON = 'GIMCHEON',      // Kiritilgan: Gimcheon
// 	SEONGNAM = 'SEONGNAM',      // Kiritilgan: Seongnam
// 	ICHEON = 'ICHEON',          // Kiritilgan: Icheon
// 	ULSAN = 'ULSAN',            // Kiritilgan: Ulsan
// }
// registerEnumType(ProductLocation, {
// 	name: 'ProductLocation',
// });

// export enum ProductType {
// 	매트리스 = '매트리스',
// 	침대프레임 = '침대프레임',
// 	소파 = '소파',
// 	테이블 = '테이블',
// 	의자 = '의자',
// 	책상 = '책상',
// 	거실장 = '거실장',
// 	서랍장 = '서랍장',
// 	협탁 = '협탁',
// 	화장대 = '화장대',
// 	식탁 = '식탁',
// 	토퍼 = '토퍼',
// 	베개 = '베개',
// 	커버 = '커버',
// }
