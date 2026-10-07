abstract class Shippingcalculator {
    protected ค่าบริการพื้นฐาน: number;

    constructor(ค่าบริการพื้นฐาน: number) {
        this.ค่าบริการพื้นฐาน = ค่าบริการพื้นฐาน;
    }

    abstract คำนวณค่าจัดส่งตามน้ำหนัก(
        น้ำหนัก: number,
        ตัวคูณความเร็วในการขนส่ง: number
    ): number;
}

class standardShipping extends Shippingcalculator {
    private อัตราค่าขนส่งต่อกิโลกรัม: number = 20;

    คำนวณค่าจัดส่งตามน้ำหนัก(
        น้ำหนัก: number,
        ตัวคูณความเร็วในการขนส่ง: number
    ): number {
        return this.ค่าบริการพื้นฐาน +
            น้ำหนัก * this.อัตราค่าขนส่งต่อกิโลกรัม * ตัวคูณความเร็วในการขนส่ง;
    }
}

let shipping = new standardShipping(50);

console.log(shipping.คำนวณค่าจัดส่งตามน้ำหนัก(5, 1));
