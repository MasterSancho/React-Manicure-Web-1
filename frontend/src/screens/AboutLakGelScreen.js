import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutLakGelScreen = () => {
 return (
  <Container>
   <Row>
    <Col xs={6} md={4}>
     <h2>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo eaque
      voluptatum autem veritatis soluta error officia quisquam vero
      consequuntur? Assumenda harum saepe omnis! Veritatis sapiente id
      doloremque, aspernatur doloribus necessitatibus?
     </h2>
    </Col>
    <Col className='text-center' xs={12} md={8}>
     <h2>לק ג’ל</h2>
     <h4 className='p-3'>
      בקצב החיים המהיר והעמוס מעטות הנשים המצליחות לשמור על ציפורניים מטופחות
      לאורך זמן. אם בעבר היו כאלו שהסתפקו בטיפוח אחת לשבוע, שלא שרד את
      הניקיונות, המטלות והריצות הרי שהיום אפשר לבחור בפתרון קל, פשוט, נגיש ויפה
      ביותר- בניית ציפורניים בלק ג’ל. מהו לק ג’ל? במה הוא שונה מבניית ציפורניים
      רגילה? מה השלבים במריחת לק ג’ל וכיצד מסירים אותו? כל התשובות לפניכן.
     </h4>
    </Col>
   </Row>
  </Container>
 );
};

export default AboutLakGelScreen;
