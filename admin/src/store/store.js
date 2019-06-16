import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: 
  {
    admin: null,
    profile: null,

    locations: [],
    location: "all",

    subjects: [],
    subject: null,

    list: [],

    item: null,

    staff: null,
    staffprofile: null,

    reports: null,
    report: null,

    students: null,
    student: null,
  },
  mutations: {
    setAdmin(state, admin) {
      state.admin = admin;
    },
    setProfile(state, profile) {
      state.profile = profile;
    },
    setLocations(state, locations) {
      state.locations = locations;
    },
    setLocation(state, location) {
      state.location = location;
    },
    setSubjects(state, subjects) {
      state.subjects = subjects;
    },
    setSubject(state, subject) {
      state.subject = subject;
    },
    setList(state, list) {
      state.list = list;
    },
    setItem(state, item) {
      state.item = item;
    },
    setStaff(state, staff) {
      state.staff = staff;
    },
    setStaffProfile(state, staffprofile) {
      state.staffprofile = staffprofile;
    },
    setReports(state, reports) {
      state.reports = reports;
    },
    setReport(state, report) {
      state.report = report;
    },
    setStudents(state, students) {
      state.students = students;
    },
    setStudent(state, student) {
      state.student = student;
    }
  },
  actions: {
    async register(context, payload) {
      try {
        let response = await axios.post("/api/admins", payload);
        await context.commit('setAdmin', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/admins/login", data);
        await context.commit('setAdmin', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/admins");
        await context.commit('setAdmin', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getAdmin(context) {
      try {
        let response = await axios.get("/api/admins");
        context.commit('setAdmin', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getLocations(context) {
      let response = await axios.get("/api/locations");
      context.commit('setLocations', response.data);
    },
    async changeLocation(context, payload) {
      context.commit('setLocation', payload.location);
    },
    async getSubjects(context) {
      let response = await axios.get("/api/subjects");
      context.commit('setSubjects', response.data);
    },
    async changeSubject(context, payload) {
      context.commit('setSubject', payload.subject);
    },
    async getList(context) {
      let response = await axios.get("/api/items/list/" + this.state.subject);
      context.commit('setList', response.data);
    },
    async getItem(context, payload) {
      let response = await axios.get("/api/items/list/" + this.state.subject + "/" + payload.index);
      context.commit('setItem', response.data);
    },
    async getStaff(context) {
      let response = await axios.get("/api/staff/" + this.state.location);
      context.commit('setStaff', response.data);
    },
  }
})
