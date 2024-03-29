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
        <h1>วิธีการดูแลผู้ป่วยอัลไชเมอร์</h1>
        <h2>
          วิธีการดูแลผู้ป่วยอัลไซเมอร์ให้มีสุขภาพแข็งแรง
          ผู้ดูแลควรรู้ว่าผู้ป่วยมีอาการอยู่ที่ระยะใด โดยปรึกษาแพทย์ผู้เชี่ยวชาญ
          เพื่อเลือกกิจกรรมที่เหมาะสมกับผู้ป่วยในแต่ละราย
        </h2>

        <h2>วิธีดูแลผู้ป่วยอัลไซเมอร์</h2>
        <ol>
          <li>ทำตารางกิจวัตรต่างๆที่ต้องทำให้คงเดิม เหมือนเดิมทุกวัน</li>
          <li>
            ทำทุกกิจกรรมให้เป็นขั้นตอน เรียบง่าย ไม่ซับซ้อน และทำทีละเรื่อง
          </li>
          <li>
            จัดบ้าน
            เตรียมสิ่งแวดล้อมและเครื่องใช้ในบ้านให้อยู่ได้อย่างปลอดภัยเช่น
            ห้องที่อยู่มีแสงสว่างเพียงพอ รองเท้าในบ้านใส่สบาย ไม่ลื่น
          </li>
          <li>
            ให้ความสำคัญกับความรู้สึกและความต้องการของคนไข้
            มากกว่าความถูกต้องของข้อมูล ไม่พยายามชี้แจงความจริง
            ใช้เหตุผลหรือโต้แย้งกับคนไข้ในรายละเอียดที่ผู้ป่วยจำไม่ได้หรือทำไม่ได้{" "}
          </li>
          <li>
            หลีกเลี่ยงการแสดงอารมณ์รุนแรง โกรธ ไม่พอใจ ผิดหวังต่อหน้าผู้ป่วย
          </li>
          <li>
            พยายามชวนผู้ป่วยพูดคุยในเรื่องที่ผู้ป่วยสนใจ ยังจำได้
            ให้ผู้ป่วยมีอารมณ์แจ่มใส อาจแทรกมุขตลก
          </li>
          <li>
            เปิดเพลง ชวนผู้ป่วยร้องเพลง เต้นรำให้ผู้ป่วยมีอารมณ์ดีอยู่เสมอ
          </li>
          <li>
            ชักชวนผู้ป่วยทำกิจกรรม หรือช่วยงานบ้านที่คาดว่าผู้ป่วยยังพอทำได้
            เช่น พับผ้า, เก็บเตียง
            แม้ว่าจะทำซ้ำๆหรือผู้ป่วยอาจจะทำได้ไม่เรียบร้อยนักก็ตาม
            การออกกำลังกายสม่ำเสมอจะช่วยลดความรุนแรงของโรคได้
            โดยช่วยกระตุ้นการทำงานของสมอง ส่งเสริมให้การสร้างเซลสมองใหม่
            สำหรับผู้สูงอายุหรือผูป่วยที่มีอาการระยะแรกควรออกกำลังกายระดับปานกลาง
            เน้นการเสริมความแข็งแรงของหัวใจ ฝึกความแข็งแรง สมดุลย์ของกล้ามเนื้อ
            มีการประสานงานระหว่างอวัยวะต่างๆ โดยการเดิน ฝึกโยคะ ฝึกไทเก็ก จี้กง
            หรือว่ายน้ำ 150 นาที / สัปดาห์
            สำหรับผู้ป่วยที่มีอาการมากให้ออกกำลังกายตามความเหมาะสมและสภาพผู้ป่วย
            ทำให้ผู้ป่วยรู้สึกสนุก เพลิดเพลิน ไม่เกินกำลัง มีการวอร์มอัพร่างกาย
            เพื่อเสริมความยืดหยุ่น และลดการบาดเจ็บระหว่างการออก กำลังกาย
          </li>
          <li>
            ทำกิจกรรมส่งเสริมให้มีส่วนร่วมในสังคม เช่นเป็นอาสาสมัคร
            เป็นสมาชิกในคลับต่างๆ ออกกำลังกายนอกบ้าน เดินเล่นในสวนสาธารณะ
            ฟังดนตรี
          </li>
          <li>
            ส่งเสริมให้มีการสังสรรค์และมีปฏิสัมพันธ์กับผู้อื่น
            ทำความรู้จักและพูดคุยกับเพื่อนบ้าน นัดพบกลุ่มเพื่อนเก่า ไปเยี่ยมญาติ
            เป็นต้น{" "}
          </li>
        </ol>
        <p>
          เอกสารอ้างอิง หนังสือคู่มือแนวทางการป้องกันภาวะสมองเสื่อม
          สำนักโภชนาการ กรมอนามัย
        </p>
      </ContentWrapper>
    </Row>
  );
}
