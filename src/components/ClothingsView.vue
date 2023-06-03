<template>
  <div>
    <ul>
      <div>      <li v-for="student in students" :key="student.name">
        {{ student.name }} 
      </li>
    </div>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    fetch('assets/apis.php')
      .then(response => response.json())
      .then(data => {
        // Update the students data
        this.students = data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
