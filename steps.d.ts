/// <reference types='codeceptjs' />
type Steps_file = typeof import('./steps_file')


declare namespace CodeceptJS {

    interface I extends
        ReturnType<StepsFile>,
        WithTranslation<ChaiWrapper>,
        WithTranslation<FileSystem>,
        WithTranslation<REST>,
        WithTranslation<ResembleHelper>,
        WithTranslation<Methods> { }

    interface SupportObject {
        I: I

    }
    interface Methods extends Playwright, steps_file, GraphQL, REST { }
    interface I extends ReturnType<steps_file>, WithTranslation<Playwright>, WithTranslation<steps_file> { }
    namespace Translation {
        interface Actions { }
    }
}