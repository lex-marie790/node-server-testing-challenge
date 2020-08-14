const db = require('../data/db-config.js');
const Academy = require('./academyModel.js');

describe('academy model', () => {
    describe('insert', () => {
        beforeEach(async ()=>{
            await db('academy').truncate();
        });

        it('insert provided character into db', async () => {
            await Academy.insert({character: 'Vanya'});
            await Academy.insert({character: 'Diego'});
            const academy = await db('academy');
            expect(academy).toHaveLength(2);
            expect(academy[0].character).toBe('Vanya')
        });

        describe('remove', async () => {
                beforeEach(async ()=>{
                    await db('academy').truncate();
                    await Academy.insert({character: 'Vanya'});
                    await Academy.insert({character: 'Diego'});
                    await Academy.insert({character: 'Number 5'});
                });
                
            it('remove provided character from db', async () => {
                await Academy.remove(1);
                const academy = await db('academy');
                expect(academy).toHaveLength(2)
            });

            it('remove correct character from db', async () => {
                await Academy.remove(1);
                const academy = await db('academy')
                expect(academy[0].character).toBe('Diego');
            });
        })
        
    })
    
})
