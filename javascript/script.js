document.addEventListener('DOMContentLoaded', function() {
    const studentForm = document.getElementById('studentForm');
    const responseMessage = document.getElementById('responseMessage');
    
    // Load students when page loads
    loadStudents();
    
    // Handle form submission
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const rollno = document.getElementById('rollno').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        const student = {
            rollno: rollno,
            name: name,
            email: email
        };
        
        addStudent(student);
    });
    
    // Function to add a new student
    async function addStudent(student) {
        const submitBtn = studentForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        try {
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';
            
            const response = await fetch('http://localhost:8080/api/student/add-student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });
            
            const data = await response.json();
            
            if (response.ok) {
                showResponseMessage(`Student ${data.Student} added successfully!`, 'success');
                studentForm.reset();
                loadStudents();
            } else {
                showResponseMessage(data.Message || 'Something went wrong', 'danger');
            }
        } catch (error) {
            console.error('Error:', error);
            showResponseMessage('Failed to connect to the server', 'danger');
        } finally {
            // Restore button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    }
    
    // Function to load all students
    async function loadStudents() {
        try {
            const response = await fetch('http://localhost:8080/api/student');
            const students = await response.json();
            
            const tableBody = document.getElementById('studentTable');
            tableBody.innerHTML = '';
            
            if (students && students.length > 0) {
                students.forEach(student => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${student.id}</td>
                        <td>${student.rollno}</td>
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                tableBody.innerHTML = '<tr><td colspan="4" class="text-center">No students found</td></tr>';
            }
        } catch (error) {
            console.error('Error loading students:', error);
            document.getElementById('studentTable').innerHTML = '<tr><td colspan="4" class="text-center text-danger">Failed to load students</td></tr>';
        }
    }
    
    // Function to show response messages
    function showResponseMessage(message, type) {
        responseMessage.textContent = message;
        responseMessage.className = `alert alert-${type}`;
        responseMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            responseMessage.style.display = 'none';
        }, 5000);
    }
});