# JavaScript-Basics

Language Overview and Practice

# Adding JavaScript

Inline JS

adding within the HTML element
<button onclick="alert('hello world')">click me</button>

Internal JS

added at the bottom of the HTML body

<script>
        document.querySelectorAll('.btn').forEach(item => {
            item.addEventListener('click', () => {
                alert('Random Button')
            })
        })
    </script>

External JS

added to the bottom of the body, link using relative path

<script src="./app.js"></script>
