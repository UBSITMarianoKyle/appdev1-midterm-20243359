# TaskFlow

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# TaskFlow - Personal Task Manager

## Project Brief
TaskFlow is a small web app to help users manage their daily tasks. You can add, edit, delete, and track your tasks easily.

---

## Main Features
- **Add Task**: Give a title, description, due date, status (Pending, In Progress, Completed), and priority (Low, Medium, High).  
- **Edit Task**: Change task details.  
- **Delete Task**: Remove a task with a confirmation message.  
- **Change Status**: Quickly update a task’s status.  
- **View All Tasks**: See all tasks in a table.  
- **Task Details**: Open a task to see all information on a separate page.

---

## Technical Requirements
- Built with **Angular v21** using standalone components  
- **Task Interface** in TypeScript  
- **Service** for all task operations (add, edit, delete, etc.)  
- **Routing** with parameters and child routes  
- **Two-way data binding** in forms  
- **Bootstrap 5** for styling and layout  

---

## Project Structure
- `AppComponent`  
- `NavbarComponent`  
- `TaskListComponent`  
- `TaskDetailComponent`  
- `TaskInfoComponent`  
- `TaskEditComponent`  
- `TaskAddComponent`  
- `task.model.ts`  
- `task.service.ts`  

---

## How to Install
1. Clone the repository:  
   ```bash
   git clone https://github.com/YourUsername/TaskFlow.git