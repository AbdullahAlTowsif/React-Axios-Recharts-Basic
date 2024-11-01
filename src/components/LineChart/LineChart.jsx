import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarks = [
        { "id": 1, "student": "Alice", "math": 78, "physics": 84, "chemistry": 79 },
        { "id": 2, "student": "Bob", "math": 85, "physics": 76, "chemistry": 82 },
        { "id": 3, "student": "Charlie", "math": 92, "physics": 88, "chemistry": 91 },
        { "id": 4, "student": "David", "math": 67, "physics": 72, "chemistry": 69 },
        { "id": 5, "student": "Eva", "math": 74, "physics": 80, "chemistry": 77 },
        { "id": 6, "student": "Frank", "math": 88, "physics": 86, "chemistry": 85 },
        { "id": 7, "student": "Grace", "math": 81, "physics": 83, "chemistry": 78 },
        { "id": 8, "student": "Hannah", "math": 90, "physics": 89, "chemistry": 92 },
        { "id": 9, "student": "Ian", "math": 76, "physics": 75, "chemistry": 80 },
        { "id": 10, "student": "Jack", "math": 69, "physics": 70, "chemistry": 72 }
    ];
    
    
    return (
        <div>
            <LChart width={800} height={400} data={subjectMarks}>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;