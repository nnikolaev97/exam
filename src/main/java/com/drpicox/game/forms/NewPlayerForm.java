package com.drpicox.game.forms;

public class NewPlayerForm {
    private String name;

    public NewPlayerForm() {}

    public void changeName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
