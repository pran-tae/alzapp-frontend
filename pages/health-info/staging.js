import { Row, Col } from "antd";
import styled from "styled-components";

const ContentWrapper = styled(Col)`
  background-color: white;
  padding: 24px !important;
  margin-top: 50px !important;
`;

export default function Staging() {
  return (
    <Row gutter={[24, 24]}>
      <ContentWrapper xs={24} md={16} offset={4}>
        <h1>การแบ่งระยะของโรคอัลไซเมอร์</h1>
        <h2>
          การแบ่งระยะของโรคอัลไซเมอร์ ตาม The Global Deterioration Scale (GDS)
          ของ นพ.แบรี่ ไรสเบิร์ก (Barry Reisberg)
          ผู้เชี่ยวชาญด้านสมองเสื่อมได้เป็น 7 ระยะดังนี้
        </h2>
        <br />
        <h2>ระยะที่ 1 สมองยังทำงานปกติ ไม่แสดงอาการ</h2>
        <br />
        <h2>ระยะที่ 2 การรู้คิดถดถอยเล็กน้อยมากเช่น</h2>
        <ul style={{ listStyleType: "square" }}>
          <li>ลืมของที่วางอยู่ในที่เก็บประจำ</li>
          <li>ลืมคำพูดที่เคยพูด</li>
        </ul>
        ระยะนี้จะยังไม่สามารถตรวจพบอาการได้
        <br />
        <h2>
          ระยะที่ 3 การรู้คิดถดถอยเล็กน้อย คนรอบข้างเริ่มสังเกตุเห็นความผิดปกติ
          เช่น
        </h2>
        <ul style={{ listStyleType: "square" }}>
          <li>ใช้คำพูดไม่ถูกหรือเรียกชื่อคนผิดๆ</li>
          <li>วางแผนงานได้ยากขึ้น</li>
          <li>ลืมเหตุการณ์ที่เพิ่งผ่านมา</li>
          <li>ทำงานร่วมกับผู้อื่นหรือในสังคมได้ยากขึ้น</li>
        </ul>
        <h2>
          ระยะที่ 4 การรู้คิดถดถอยปานกลาง เข้าสู่ภาวะสมองเสื่อมระยะรุนแรงน้อย
        </h2>
        <ul style={{ listStyleType: "square" }}>
          <li>ลืมเหตุการณ์ที่เพิ่งเกิดขึ้น</li>
          <li>มีปัญหาเกี่ยวกับการคิดเลข</li>
          <li>อารมณ์หงุดหงิดง่าย</li>
          <li>มีปัญหาในการใช้จ่ายเงินหรือจัดการเรื่องการเงิน</li>
        </ul>
        <h2>ระยะที่ 5 ภาวะสมองเสื่อมระยะรุนแรงปานกลาง</h2>
        <ul style={{ listStyleType: "square" }}>
          <li>สังเกตุเห็นอาการชัดขึ้นเรื่องความจำ</li>
          <li>
            ความคิด การคิดอ่านช้าลง ต้องการความช่วยเหลือในการทำกิจกรรมต่างๆ
          </li>
          <li>สับสนเรื่องเวลา วันที่ ที่อยู่</li>
          <li>นับตัวเลขถอยหลังได้ยากขึ้น</li>
          <li>ยังจำรายละเอียดเกี่ยวกับตัวเองและครอบครัวในอดีตได้บ้าง</li>
        </ul>
        <h2>ระยะที่ 6 ภาวะสมองเสื่อมระยะรุนแรง</h2>
        <ul style={{ listStyleType: "square" }}>
          <li>
            บุคลิกเปลี่ยนไป ความจำแย่ลงไปอีกต้องมีคนช่วยเหลือในกิจวัตรประจำวัน
          </li>
          <li>ไม่รู้ว่าเกิดอะไรขึ้นกับตัวเอง</li>
          <li>จำชื่อตัวเองได้ แต่จำเรื่องราวของตัวเองไม่ค่อยได้</li>
          <li>จำชื่อคู่ครองหรือผู้ดูแลไม่ได้</li>
          <li>แต่งตัวไม่ได้ ถ้าไม่มีคนช่วย</li>
          <li>วงจรการหลับตื่นผิดปกติมาก นอนกลางวัน ตื่นกลางคืน ไม่ยอมหลับ</li>
          <li>ควบคุมการขับถ่ายไม่ได้</li>
          <li>
            บุคลิกและพฤติกรรมเปลี่ยนไปมากหวาดระแวง ชอบปัดมือ หรือ ฉีกกระดาษทิชชู
          </li>
        </ul>
        <h2>ระยะที่ 7 ภาวะสมองเสื่อมระยะรุนแรงมาก</h2>
        <ul style={{ listStyleType: "square" }}>
          <li>ไม่ตอบสนองต่อสิ่งรอบข้าง ไม่เคลื่อนไหว แต่ยังพูดได้</li>
          <li>ต้องมีคนดูแล ป้อนอาหาร อาบน้ำ พาเข้าห้องน้ำ</li>
          <li>ยิ้มไม่เป็น นั่งเองไม่ได้ กลืนอาหารไม่ได้</li>
        </ul>
        <p>
          เอกสารอ้างอิง หนังสือคู่มือแนวทางการป้องกันภาวะสมองเสื่อม
          สำนักโภชนาการ กรมอนามัย
          <br />
          ปรับปรุงแก้ไข โดย รศ.นพ. สุขเจริญ ตั้งวงษ์ไชย
        </p>
      </ContentWrapper>
    </Row>
  );
}
