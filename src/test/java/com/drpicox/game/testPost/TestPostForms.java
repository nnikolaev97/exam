package com.drpicox.game.testPost;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class TestPostForms implements BeforePostTest {

    private final Map<Class,Object> forms = new HashMap<>();

    public <T> T newForm(Class<T> formClass) {
        try {
            var instance = formClass.getDeclaredConstructor().newInstance();
            forms.put(formClass, instance);
            return instance;
        } catch (IllegalAccessException e) {
            throw newErrorMissingEmptyPublicConstructor(formClass, e);
        } catch (NoSuchMethodException e) {
            throw newErrorMissingEmptyPublicConstructor(formClass, e);
        } catch (Throwable th) {
            throw new AssertionError("Cannot create an form instance of '"+formClass.getName()+"'", th);
        }
    }

    private <T> AssertionError newErrorMissingEmptyPublicConstructor(Class<T> formClass, Throwable reason) {
        var name = formClass.getSimpleName();
        var error = new AssertionError("Cannot create an form instance of '" + formClass.getName() + "'\n" +
                " Make sure that it has a public constructor with no arguments, ex:\n" +
                " public class " + name + " {\n" +
                "   public " + name + "() {}\n" +
                "   ^^^^^^\n" +
                " }", reason);
        return error;
    }

    public <T> T getForm(Class<T> formClass) {
        var instance = (T) forms.get(formClass);
        if (instance == null)
            throw new AssertionError("There is no form instance of '"+formClass.getName()+"'.\n"+
                    " Make sure that a previous runner has called newForm("+formClass.getName()+".class).\n" +
                    " Existing form instances are:\n  -" +
                    forms.keySet().stream().map(c -> c.getName()).collect(Collectors.joining("\n  -"))
            );
        return instance;
    }

    public <T> void setForm(T form) {
        if (form != null) forms.put(form.getClass(), form);
    }

    @Override
    public void beforePostTest() {
        forms.clear();
    }
}
