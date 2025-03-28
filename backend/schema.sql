CREATE TABLE tests (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
);

INSERT INTO tests (name, description) VALUES
('MBTI', 'Test 16 typów osobowości'),
('DISC', 'Test stylu zachowania'),
('Big Five', 'Test 5 cech osobowości');


