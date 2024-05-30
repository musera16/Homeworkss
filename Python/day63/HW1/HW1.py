import tkinter as tk
from tkinter import messagebox
import uuid

class BankApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Bank Application")

        self.label = tk.Label(root, text="Enter Name:")
        self.label.pack()

        self.entry = tk.Entry(root)
        self.entry.pack()

        self.submit_button = tk.Button(root, text="Submit", command=self.submit)
        self.submit_button.pack()

        self.users = []

    def submit(self):
        name = self.entry.get()
        if name:
            user_id = str(uuid.uuid4())
            self.users.append({"Name": name, "ID": user_id})
            print(f"Name: {name}, ID: {user_id}")
            messagebox.showinfo("Success", f"User {name} with ID {user_id} added.")
            self.entry.delete(0, tk.END)
        else:
            messagebox.showwarning("Input Error", "Please enter a name.")

if __name__ == "__main__":
    root = tk.Tk()
    app = BankApp(root)
    root.mainloop()
