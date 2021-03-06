import { ConversaHandler } from "../src/handlers/conversaHandler";
import { IRepositoryConversa, RepositoryConversa } from "../src/repositorys/repositoryConversa";
import { ErrorHandler } from "../src/utils/ErrorHandler";

describe("ConversaHandler.ts", () => {

    function build() {
        const mockRepositorio: IRepositoryConversa = {
            adicionar: jest.fn(),
            procurar: jest.fn(),
            mostrar: jest.fn(),
        }

        return { handler: new ConversaHandler(mockRepositorio) }
    };

    describe("Error handling", () => {

        it("Ao tentar adicionar um nome vazio, deve lançar uma exceção ErrorHandler", async () => {
            // Assert
            expect.assertions(1);

            // Arrange
            const { handler } = build();

            // Act
            await expect(handler.postConversa("")).rejects.toThrowError(ErrorHandler);
        });

        it("Ao tentar procurar por um nome inexistente, deve lançar uma exceção ErrorHandler", async () => {
            // Assert
            expect.assertions(1);

            // Arrange
            const { handler } = build();

            // Act
            await expect(handler.FindConversas("inexistente")).rejects.toThrowError(ErrorHandler);
        })
    });
});